import React, { useMemo } from 'react';

// Formateador CLP (sin decimales; ajusta si tus precios vienen con centavos)
const clp = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});

export default function CartPage({
  cartItems = [],
  removeFromCart,
  incrementQty,
  decrementQty,
}) {
  // Normaliza nombre de campo de precio (por si tu dataset usa "precio" en vez de "price")
  const lineItems = cartItems.map((it) => ({
    ...it,
    price:
      typeof it.price === 'number'
        ? it.price
        : typeof it.precio === 'number'
        ? it.precio
        : Number(it.price ?? it.precio ?? 0),
  }));

  const subtotal = useMemo(
    () => lineItems.reduce((acc, it) => acc + it.price * it.qty, 0),
    [lineItems]
  );

  if (!lineItems.length) return <p>Tu carrito está vacío.</p>;

  return (
    <section>
      <h1>Carrito</h1>

      <div className="table-responsive">
        <table className="table cart-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Producto</th>
              <th>Precio</th>
              <th style={{ width: 160 }}>Cantidad</th>
              <th>Total</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((item) => {
              const lineTotal = item.price * item.qty;
              return (
                <tr key={item.id}>
                  <td>
                    <div className="cart-item">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="cart-thumb"
                        />
                      )}
                      <div>
                        <div className="cart-name">{item.name}</div>
                        {item.category && (
                          <div className="cart-cat">{item.category}</div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td>{clp.format(item.price)}</td>
                  <td>
                    <div className="qty-control">
                      <button
                        type="button"
                        className="btn btn-ghost"
                        onClick={() => decrementQty(item.id)}
                        aria-label={`Disminuir ${item.name}`}
                        disabled={item.qty <= 1}
                      >
                        −
                      </button>

                      <span className="qty">{item.qty}</span>

                      <button
                        type="button"
                        className="btn btn-ghost"
                        onClick={() => incrementQty(item.id)}
                        aria-label={`Aumentar ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="line-total">{clp.format(lineTotal)}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan={3}
                style={{ textAlign: 'right', fontWeight: 600 }}
              >
                Subtotal
              </td>
              <td colSpan={2} style={{ fontWeight: 700 }}>
                {clp.format(subtotal)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
