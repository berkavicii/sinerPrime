<?php
/*
 * Siner Prime — contact form sender.
 *
 * The site itself is a static export; this one PHP file sits beside it on Plesk (httpdocs/api/)
 * and sends the form to the company inbox over SMTP. No libraries needed.
 *
 * SMTP details are NOT in this file: copy contact-config.example.php to contact-config.php
 * (same folder, or one level above httpdocs) and fill it in. contact-config.php is git-ignored.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function reply(int $status, array $data): void
{
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    reply(405, ['ok' => false, 'error' => 'method']);
}

/* ---------- config ---------- */

$config = null;
foreach ([dirname(__DIR__, 2) . '/contact-config.php', __DIR__ . '/contact-config.php'] as $path) {
    if (is_file($path)) {
        $config = require $path;
        break;
    }
}
if (!is_array($config) || empty($config['host']) || empty($config['to'])) {
    error_log('contact.php: contact-config.php missing or incomplete');
    reply(500, ['ok' => false, 'error' => 'config']);
}

/* ---------- input ---------- */

$raw = file_get_contents('php://input') ?: '';
$in = json_decode($raw, true);
if (!is_array($in)) {
    $in = $_POST;
}

$clean = static function ($v, int $max): string {
    $v = is_string($v) ? $v : '';
    $v = str_replace("\0", '', $v);
    $v = trim($v);
    return mb_substr($v, 0, $max);
};
// header-safe: no line breaks in single-line fields
$line = static fn($v, int $max): string => preg_replace('/[\r\n]+/', ' ', $clean($v, $max));

$name    = $line($in['name'] ?? '', 120);
$email   = $line($in['email'] ?? '', 160);
$phone   = $line($in['phone'] ?? '', 40);
$company = $line($in['company'] ?? '', 160);
$topic   = $line($in['topic'] ?? '', 120);
$message = $clean($in['message'] ?? '', 5000);
$lang    = ($in['lang'] ?? 'tr') === 'en' ? 'en' : 'tr';

// honeypot: a hidden field people never fill in
if (!empty($in['website'])) {
    reply(200, ['ok' => true]);
}

$errors = [];
if ($name === '') $errors[] = 'name';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if ($message === '') $errors[] = 'message';
if ($errors) {
    reply(422, ['ok' => false, 'error' => 'invalid', 'fields' => $errors]);
}

/* ---------- light rate limit: 5 messages per IP per 10 minutes ---------- */

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$bucket = sys_get_temp_dir() . '/siner-contact-' . hash('sha256', $ip);
$now = time();
$hits = array_filter(
    array_map('intval', is_file($bucket) ? explode(',', (string) file_get_contents($bucket)) : []),
    static fn($t) => $t > $now - 600
);
if (count($hits) >= 5) {
    reply(429, ['ok' => false, 'error' => 'rate']);
}
$hits[] = $now;
@file_put_contents($bucket, implode(',', $hits), LOCK_EX);

/* ---------- the mail ---------- */

$subject = 'Web sitesi · ' . ($topic !== '' ? $topic . ' · ' : '') . ($company !== '' ? $company : $name);

$rows = [
    'Ad soyad' => $name,
    'Firma'    => $company,
    'Telefon'  => $phone,
    'E-posta'  => $email,
    'Konu'     => $topic,
    'Dil'      => strtoupper($lang),
];
$body = "siner-prime web sitesi iletişim formundan yeni mesaj\n\n";
foreach ($rows as $k => $v) {
    if ($v !== '') $body .= str_pad($k . ':', 11) . $v . "\n";
}
$body .= "\n" . str_repeat('—', 24) . "\n\n" . $message . "\n\n" . str_repeat('—', 24) . "\n"
    . 'Gönderim: ' . date('d.m.Y H:i') . ' · IP: ' . $ip . "\n"
    . "Yanıtla dediğinizde doğrudan ziyaretçiye gider.\n";

try {
    smtp_send($config, [
        'to'       => (array) $config['to'],
        'subject'  => $subject,
        'body'     => $body,
        'reply_to' => [$email, $name],
    ]);
} catch (Throwable $e) {
    error_log('contact.php: ' . $e->getMessage());
    reply(502, ['ok' => false, 'error' => 'send']);
}

reply(200, ['ok' => true]);

/* ---------- a small SMTP client (SSL on 465, STARTTLS on 587, AUTH LOGIN) ---------- */

function smtp_send(array $c, array $m): void
{
    $host    = (string) $c['host'];
    $port    = (int) ($c['port'] ?? 587);
    $secure  = strtolower((string) ($c['secure'] ?? ($port === 465 ? 'ssl' : 'tls')));
    $user    = (string) ($c['username'] ?? '');
    $pass    = (string) ($c['password'] ?? '');
    $from    = (string) ($c['from'] ?? $user);
    $fromNm  = (string) ($c['from_name'] ?? 'Siner Prime Web');
    $timeout = (int) ($c['timeout'] ?? 15);

    $ctx = stream_context_create(['ssl' => [
        'verify_peer'      => (bool) ($c['verify_peer'] ?? true),
        'verify_peer_name' => (bool) ($c['verify_peer'] ?? true),
        'peer_name'        => $host,
    ]]);
    $target = ($secure === 'ssl' ? 'ssl://' : 'tcp://') . $host . ':' . $port;
    $s = @stream_socket_client($target, $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT, $ctx);
    if (!$s) throw new RuntimeException("connect $target: $errstr ($errno)");
    stream_set_timeout($s, $timeout);

    $read = static function () use ($s): array {
        $text = '';
        while (($l = fgets($s, 515)) !== false) {
            $text .= $l;
            if (strlen($l) < 4 || $l[3] !== '-') break;
        }
        return [(int) substr($text, 0, 3), $text];
    };
    $cmd = static function (string $line, array $ok) use ($s, $read): string {
        fwrite($s, $line . "\r\n");
        [$code, $text] = $read();
        if (!in_array($code, $ok, true)) {
            $shown = str_starts_with($line, 'AUTH') || strlen($line) > 60 ? '[hidden]' : $line;
            throw new RuntimeException("SMTP $shown -> $text");
        }
        return $text;
    };

    [$code, $greet] = $read();
    if ($code !== 220) throw new RuntimeException("greeting: $greet");

    $ehlo = $c['helo'] ?? ($_SERVER['SERVER_NAME'] ?? 'localhost');
    $cmd("EHLO $ehlo", [250]);
    if ($secure === 'tls') {
        $cmd('STARTTLS', [220]);
        if (!stream_socket_enable_crypto($s, true, STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT | STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT)) {
            throw new RuntimeException('STARTTLS failed');
        }
        $cmd("EHLO $ehlo", [250]);
    }
    if ($user !== '') {
        $cmd('AUTH LOGIN', [334]);
        $cmd(base64_encode($user), [334]);
        $cmd(base64_encode($pass), [235]);
    }

    $cmd('MAIL FROM:<' . $from . '>', [250]);
    foreach ($m['to'] as $to) $cmd('RCPT TO:<' . $to . '>', [250, 251]);
    $cmd('DATA', [354]);

    $enc = static fn(string $t): string => '=?UTF-8?B?' . base64_encode($t) . '?=';
    [$rEmail, $rName] = $m['reply_to'];
    $domain = substr(strrchr($from, '@') ?: '@siner.local', 1);
    $headers = [
        'Date: ' . date('r'),
        'From: ' . $enc($fromNm) . ' <' . $from . '>',
        'To: ' . implode(', ', array_map(static fn($t) => '<' . $t . '>', $m['to'])),
        'Reply-To: ' . $enc($rName) . ' <' . $rEmail . '>',
        'Subject: ' . $enc($m['subject']),
        'Message-ID: <' . bin2hex(random_bytes(12)) . '@' . $domain . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
    ];
    $data = implode("\r\n", $headers) . "\r\n\r\n"
        . rtrim(chunk_split(base64_encode($m['body']), 76, "\r\n")) . "\r\n.";
    $cmd($data, [250]);
    $cmd('QUIT', [221]);
    fclose($s);
}
