import React from 'react';
import { products } from '../data/products.js';
import Button from '../atoms/Button.jsx';

/**
 * Página de listado de productos para el panel de administración.
 * Muestra todos los productos y botones para editar/eliminar (sin funcionalidad).
 */
export default function AdminProductsPage() {
  return (
    <div>
      <h2>Productos (Admin)</h2>
      <div style={{ marginBottom: '1rem' }}>
        <Button onClick={() => alert('Funcionalidad no implementada')}>Nuevo producto</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Crítico</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.code}</td>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>${p.price.toLocaleString()}</td>
              <td>{p.stock}</td>
              <td>{p.critical}</td>
              <td style={{ display: 'flex', gap: '0.5rem' }}>
                <Button onClick={() => alert('Editar no implementado')}>Editar</Button>
                <Button onClick={() => alert('Eliminar no implementado')}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}