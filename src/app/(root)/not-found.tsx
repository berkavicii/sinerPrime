export default function NotFound() {
  return (
    <main
      style={{ minHeight: "100dvh", display: "grid", placeItems: "center", background: "#0a0a0b", color: "#f2ede4", fontFamily: "Georgia, serif", textAlign: "center" }}
    >
      <div>
        <p style={{ fontSize: "6rem", margin: 0, color: "#c8a46a" }}>404</p>
        <p lang="en" style={{ letterSpacing: "0.3em", textTransform: "uppercase", fontSize: 12, opacity: 0.7 }}>The Art of Scent</p>
        <p style={{ marginTop: 32 }}>
          <a href="/tr/" style={{ color: "#ecd7aa" }}>Ana sayfa</a> · <a href="/en/" style={{ color: "#ecd7aa" }}>Home</a>
        </p>
      </div>
    </main>
  );
}
