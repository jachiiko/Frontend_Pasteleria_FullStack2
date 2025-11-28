import React from 'react';

/**
 * Componente para mostrar estadísticas en el panel de administración.
 * Recibe un título y un número. Se utiliza para mostrar conteos de productos, usuarios y stock.
 */
export default function StatsBox({ label, value }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--color-white)',
        border: '1px solid var(--color-border)',
        borderRadius: '0.75rem',
        padding: '0.75rem 1rem',
        alignItems: 'flex-start',
        minWidth: '160px',
        flex: '1',
      }}
    >
      <span style={{ color: '#8c5a3e', fontSize: '0.8rem', marginBottom: '0.25rem' }}>{label}</span>
      <span style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.4rem', color: 'var(--color-brown)' }}>{value}</span>
    </div>
  );
}