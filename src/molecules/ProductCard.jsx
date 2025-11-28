import React from 'react';
import Button from '../atoms/Button.jsx';

/**
 * Tarjeta de producto que muestra imagen, categoría, nombre, precio y un botón para añadir al carrito.
 */
export default function ProductCard({ product, onAdd }) {
  const { image, name, category, price } = product;
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-card-content">
        {category && <div className="product-card-category">{category}</div>}
        <div className="product-card-name">{name}</div>
        <div className="product-card-price">${price.toLocaleString()}</div>
        <Button className="add-btn" onClick={() => onAdd(product)}>
          Añadir
        </Button>
      </div>
    </div>
  );
}