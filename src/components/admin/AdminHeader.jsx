import { NavLink } from 'react-router-dom';

export default function AdminHeader() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/cake.svg" alt="Pastel" width="24" height="24" />
        Admin – 1000 Sabores
      </div>
      <nav>
        <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
        <NavLink to="/admin/productos" className={({ isActive }) => isActive ? 'active' : ''}>Productos</NavLink>
        <NavLink to="/admin/usuarios" className={({ isActive }) => isActive ? 'active' : ''}>Usuarios</NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Sitio</NavLink>
      </nav>
    </header>
  );
}
