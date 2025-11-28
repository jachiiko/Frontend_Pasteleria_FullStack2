import React from 'react';
import { products } from '../data/products.js';
import { users } from '../data/users.js';
import StatsBox from '../molecules/StatsBox.jsx';
import Button from '../atoms/Button.jsx';
import { Link } from 'react-router-dom';

/**
 * Página de inicio del panel de administración. Muestra estadísticas y accesos rápidos.
 */
export default function AdminDashboard() {
  const productosCount = products.length;
  const usuariosCount = users.length;
  const stockLow = products.filter((p) => p.stock <= p.critical).length;
  const lowProducts = products.filter((p) => p.stock <= p.critical);

  return (
    <div>
      <h2>Dashboard</h2>
      {/* Estadísticas */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <StatsBox label="Productos" value={productosCount} />
          <StatsBox label="Stock bajo" value={stockLow} />
          <StatsBox label="Usuarios" value={usuariosCount} />
      </div>
      {/* Acciones rápidas */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        <Link to="/admin/productos">
          <Button>Ver productos</Button>
        </Link>
        <Link to="/admin/usuarios">
          <Button>Ver usuarios</Button>
        </Link>
      </div>
      {/* Tabla de productos con stock crítico */}
      <h3>Productos con stock crítico</h3>
      {lowProducts.length === 0 ? (
        <p>Sin productos en nivel crítico 🎉</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Stock</th>
              <th>Crítico</th>
            </tr>
          </thead>
          <tbody>
            {lowProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.code}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.stock}</td>
                <td>{p.critical}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}