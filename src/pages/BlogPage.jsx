import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/blog.js";

export default function BlogPage() {
  return (
    <main style={{ padding: "2rem 4rem" }}>
      <h2 style={{ fontFamily: "'Pacifico', cursive", color: "#7a3d21", textAlign: "center", marginBottom: "2rem" }}>
        Blog
      </h2>

      <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            style={{ textDecoration: "none", color: "inherit", borderRadius: 12, overflow: "hidden", background: "#fff",
                     boxShadow: "0 4px 10px rgba(0,0,0,.1)" }}
          >
            <img src={p.img} alt={p.title} style={{ width: "100%", height: 220, objectFit: "cover" }} />
            <div style={{ padding: "1.25rem" }}>
              <h3 style={{ fontFamily: "'Pacifico', cursive", color: "#7a3d21", margin: 0 }}>{p.title}</h3>
              <p style={{ margin: "0.5rem 0 0", color: "#5a4634" }}>{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
