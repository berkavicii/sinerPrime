// The static export has no server to redirect, so "/" forwards to the
// visitor's language in the browser (Turkish unless the browser prefers English).
// public/.htaccess performs the same redirect at the server level on Plesk/Apache.
const script = `(function(){var l=(navigator.language||'tr').toLowerCase().indexOf('tr')===0?'tr':((navigator.language||'').toLowerCase().indexOf('en')===0?'en':'tr');location.replace('/'+l+'/');})();`;

export default function RootPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/tr/" />
      </noscript>
      <a href="/tr/" style={{ color: "#c8a46a" }}>
        Siner Prime
      </a>
    </>
  );
}
