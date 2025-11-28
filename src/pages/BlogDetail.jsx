import { useParams, Link } from "react-router-dom";
import { posts } from "../data/blog.js";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <main style={{ padding: "2rem 4rem", textAlign: "center" }}>
        <h2>Artículo no encontrado</h2>
        <Link to="/blog" style={{ color: "#7a3d21", textDecoration: "underline" }}>← Volver al blog</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem 4rem", maxWidth: 900, margin: "0 auto" }}>
      <Link to="/blog" style={{ color: "#7a3d21", textDecoration: "underline" }}>← Volver al blog</Link>
      <article style={{ background: "#fff", borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,.1)", overflow: "hidden", marginTop: 16 }}>
        <img src={post.img} alt={post.title} style={{ width: "100%", height: 380, objectFit: "cover" }} />
        <div style={{ padding: "2rem" }}>
          <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#7a3d21", marginTop: 0 }}>{post.title}</h2>
          <p style={{ whiteSpace: "pre-line", lineHeight: 1.8, color: "#5a4634" }}>{post.content}</p>
        </div>
      </article>
    </main>
  );
}
