import React from 'react';
import Card from '../atoms/Card.jsx';

/**
 * Página "Nosotros" que cuenta la historia de la pastelería.
 */
export default function NosotrosPage() {
  return (
    <div>
      <h2>Nosotros</h2>
      <Card>
        {/* Imagen descriptiva del taller. Puede ser reemplazada por una foto real. */}
        <img
          src="/assets/nosotros.jpg"
          alt="Nuestro taller"
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '0.5rem' }}
        />
        <div style={{ marginTop: '1rem' }}>
          <p>
            Somos una pastelería familiar con más de diez años de oficio. Nuestro taller combina
            técnicas tradicionales con procesos de calidad que aseguran sabor constante y una
            presentación impecable. Trabajamos con materias primas frescas y proveedores locales.
          </p>
          <p>
            Creemos que una buena torta debe equilibrar <strong>sabor, textura y presentación</strong>.
            Por eso ofrecemos líneas clásicas, sin gluten y veganas, todas desarrolladas en
            recetas dedicadas para evitar trazas y respetar cada requerimiento.
          </p>
          <p>
            Atendemos cumpleaños, matrimonios y eventos corporativos. Te ayudamos a estimar
            porciones, seleccionar sabores y proponer una decoración acorde al estilo de tu
            celebración.
          </p>
        </div>
      </Card>
    </div>
  );
}