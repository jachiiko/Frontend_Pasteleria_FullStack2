import { useState } from 'react';
import Navbar from './Navbar';

export default function Header({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/assets/cake.svg" alt="Logo Pastelería 1000 Sabores" width="24" height="24" />
        <span>1000 Sabores</span>
      </div>

      <button
        className="nav-toggle"
        aria-label="Abrir menú"
        aria-controls="main-nav"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        ☰
      </button>

      <Navbar
        id="main-nav"
        className={open ? 'open' : ''}
        onLinkClick={() => setOpen(false)}
        cartCount={cartCount}
      />
    </header>
  );
}
