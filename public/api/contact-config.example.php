<?php
/*
 * Copy this file to contact-config.php and fill in the SMTP details.
 * Put it either here (httpdocs/api/contact-config.php) or, better, one level above httpdocs
 * so it is outside the web root. contact-config.php is git-ignored; never commit real passwords.
 */
return [
    'host'      => 'mail.example.com',   // SMTP sunucusu
    'port'      => 465,                  // 465 = SSL, 587 = STARTTLS
    'secure'    => 'ssl',                // 'ssl' (465) ya da 'tls' (587)
    'username'  => 'web@example.com',
    'password'  => '',
    'from'      => 'web@example.com',    // genelde username ile aynı adres olmalı
    'from_name' => 'Siner Prime Web',
    'to'        => ['info@example.com'], // formun düşeceği adres(ler)
    // 'verify_peer' => false,           // yalnızca sunucu sertifikası kendinden imzalıysa
];
