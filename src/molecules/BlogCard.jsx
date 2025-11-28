import React from 'react';

/**
 * Tarjeta para entradas de blog. Muestra imagen, título y descripción corta.
 */
export default function BlogCard({ post }) {
  const { image, title, description } = post;
  return (
    <div className="blog-card">
      {image && <img src={image} alt={title} />}
      <div className="blog-card-content">
        <div className="blog-card-title">{title}</div>
        <p className="blog-card-description">{description}</p>
      </div>
    </div>
  );
}