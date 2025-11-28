import React, { useState } from 'react';
import Input from '../atoms/Input.jsx';
import Button from '../atoms/Button.jsx';
import Card from '../atoms/Card.jsx';

/**
 * Página de contacto con formulario para enviar consultas.
 */
export default function ContactPage() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // En una aplicación real podrías enviar el mensaje a un backend.
    alert('Gracias por tu mensaje. ¡Nos pondremos en contacto pronto!');
    setNombre('');
    setCorreo('');
    setComentario('');
  };

  return (
    <div>
      <h2>Contacto</h2>
      <Card style={{ maxWidth: '500px' }}>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <Input
            label="Correo (opcional)"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="opcional@duoc.cl"
          />
          <div className="field">
            <label>Comentario</label>
            <textarea
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Tu mensaje..."
              required
            />
          </div>
          <Button type="submit" style={{ width: '100%' }}>
            Enviar
          </Button>
        </form>
      </Card>
    </div>
  );
}