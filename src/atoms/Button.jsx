import React from 'react';

/**
 * Botón básico reutilizable.
 * Recibe props para personalizar su estilo y comportamiento.
 * Por defecto aplica el estilo "btn" y "btn-primary" definido en index.css.
 */
export default function Button({ children, className = '', onClick, type = 'button' }) {
  return (
    <button type={type} className={`btn btn-primary ${className}`.trim()} onClick={onClick}>
      {children}
    </button>
  );
}