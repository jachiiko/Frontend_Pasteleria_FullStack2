import React from 'react';

/**
 * Contenedor genérico con borde y sombreado, útil para agrupar contenido.
 */
export default function Card({ children, className = '' }) {
  return <div className={`card ${className}`.trim()}>{children}</div>;
}