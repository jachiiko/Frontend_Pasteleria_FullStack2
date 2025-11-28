import { NavLink } from 'react-router-dom';

export default function Navbar({ cartCount, className = '', id, onLinkClick }) {
  const linkClass = ({ isActive }) => (isActive ? 'active' : '');
  const handleClick = () => onLinkClick && onLinkClick();

  return (
    <nav id={id} className={className}>
      <NavLink to="/" end className={linkClass} onClick={handleClick}>Inicio</NavLink>
      <NavLink to="/productos" className={linkClass} onClick={handleClick}>Productos</NavLink>
      <NavLink to="/carrito" className={linkClass} onClick={handleClick}>
        Carrito <span className="badge">{cartCount}</span>
      </NavLink>
      <NavLink to="/blog" className={linkClass} onClick={handleClick}>Blog</NavLink>
      <NavLink to="/nosotros" className={linkClass} onClick={handleClick}>Nosotros</NavLink>
      <NavLink to="/contacto" className={linkClass} onClick={handleClick}>Contacto</NavLink>
      <NavLink to="/login" className={linkClass} onClick={handleClick}>Login</NavLink>
      <NavLink to="/registro" className={linkClass} onClick={handleClick}>Registro</NavLink>
    </nav>
  );
}
