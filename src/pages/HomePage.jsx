import React from 'react';
import { products } from '../data/products.js'; // o los destacados que uses
import ProductCard from '../molecules/ProductCard.jsx';

export default function HomePage({ addToCart }) {
  // Ejemplo: muestra 4 destacados
  const destacados = products.slice(0, 4);

  return (
    <section>
      <h1>Bienvenido a 1000 Sabores</h1>
      <p>Endulza tu día con nuestros productos destacados.</p>

      <div className="product-grid">
        {destacados.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={() => addToCart(p)}
          />
        ))}
      </div>
    </section>
  );
}
