import React, { useState, useMemo } from 'react';
import ProductCard from '../molecules/ProductCard.jsx';
import { products } from '../data/products.js';

export default function ProductsPage({ addToCart }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  const categories = useMemo(() => Array.from(new Set(products.map(p => p.category))), []);
  const filtered = products.filter(p =>
    (category ? p.category === category : true) &&
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', gap: '2rem' }}>
      {/* filtros... */}
      <section style={{ flex: 1 }}>
        <div className="product-grid">
          {filtered.map(prod => (
            <ProductCard key={prod.id} product={prod} onAdd={() => addToCart(prod)} />
          ))}
        </div>
        {filtered.length === 0 && <p>No se encontraron productos.</p>}
      </section>
    </div>
  );
}
