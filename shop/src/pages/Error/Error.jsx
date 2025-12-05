export default function ErrorPage() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Oops!</h1>
      <h2>Something went wrong or page not found.</h2>
      <p>The page you’re looking for doesn't exist.</p>

      <a href="/" style={{ color: "blue" }}>Go Home</a>
    </div>
  );
}
