// src/layouts/AdminLayout.jsx
import { Outlet, NavLink, Link } from "react-router-dom";

export default function AdminLayout() {
  const base = {
    padding: "0.5rem 0.9rem",
    borderRadius: 12,
    textDecoration: "none",
    color: "#5a4634",
    background: "rgba(255,255,255,.5)",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#faf6f3" }}>
      <header
        style={{
          background: "#f5c0cf",
          padding: "0.8rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        {/* Logo + título */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/assets/cake.svg" alt="1000 Sabores" width={24} height={24} />
          <strong>Admin — 1000 Sabores</strong>
        </div>

        {/* Navegación */}
        <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <NavLink
            to="/admin/dashboard"
            style={({ isActive }) => ({
              ...base,
              background: isActive ? "#ffdbe6" : base.background,
              fontWeight: isActive ? 700 : 500,
            })}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/productos"
            style={({ isActive }) => ({
              ...base,
              background: isActive ? "#ffdbe6" : base.background,
              fontWeight: isActive ? 700 : 500,
            })}
          >
            Productos
          </NavLink>

          <NavLink
            to="/admin/usuarios"
            style={({ isActive }) => ({
              ...base,
              background: isActive ? "#ffdbe6" : base.background,
              fontWeight: isActive ? 700 : 500,
            })}
          >
            Usuarios
          </NavLink>

          {/* Volver al sitio público */}
          <Link
            to="/"
            style={{ ...base, background: "#fff" }}
            title="Volver al sitio"
          >
            Sitio
          </Link>
          {/* Si lo prefieres en nueva pestaña:
              <a href="/" target="_blank" rel="noreferrer" style={{ ...base, background: "#fff" }}>Sitio</a>
          */}
        </nav>
      </header>

      <main style={{ padding: "1.25rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
