import React from 'react';
import { users } from '../data/users.js';
import Button from '../atoms/Button.jsx';

/**
 * Página de usuarios en el panel de administración. Muestra la lista de usuarios
 * y acciones para editar/eliminar (no implementadas).
 */
export default function AdminUsersPage() {
  return (
    <div>
      <h2>Usuarios</h2>
      <div style={{ marginBottom: '1rem' }}>
        <Button onClick={() => alert('Funcionalidad no implementada')}>Nuevo usuario</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>RUN</th>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Tipo</th>
            <th>Región</th>
            <th>Comuna</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.run}</td>
              <td>{u.nombres}</td>
              <td>{u.apellidos}</td>
              <td>{u.correo}</td>
              <td>{u.tipo}</td>
              <td>{u.region}</td>
              <td>{u.comuna}</td>
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