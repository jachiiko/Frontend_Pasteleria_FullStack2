import React from 'react';

/**
 * Componente Input reutilizable. Acepta todas las props de un input HTML
 * y aplica las clases de estilo definidas en index.css.
 */
export default function Input({ label, ...props }) {
  return (
    <div className="field">
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
}