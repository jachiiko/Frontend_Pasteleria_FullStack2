import React from 'react';

/**
 * Componente Select reutilizable para listas desplegables.
 * Recibe etiqueta y opciones como props.
 */
export default function Select({ label, options = [], ...props }) {
  return (
    <div className="field">
      {label && <label>{label}</label>}
      <select {...props}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}