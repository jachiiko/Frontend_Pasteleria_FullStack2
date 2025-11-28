import { Routes, Route } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useSessionKey } from './hooks/useSessionKey';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import CartPage from './pages/CartPage.jsx';
import BlogDetail from './pages/BlogDetail.jsx';
import BlogPage from './pages/BlogPage.jsx';
import NosotrosPage from './pages/NosotrosPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import AdminDashboard from './admin/Dashboard.jsx';
import AdminProductsPage from './admin/ProductsPage.jsx';
import AdminUsersPage from './admin/UsersPage.jsx';

export default function App() {
  useSessionKey(); 


  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = sessionStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      return existing
        ? prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...product, qty: 1 }];
    });
  };

  // Sube cantidad en 1
const incrementQty = (id) => {
  setCartItems(prev =>
    prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i)
  );
};

// Baja cantidad en 1 (si llega a 0, elimina el ítem)
const decrementQty = (id) => {
  setCartItems(prev =>
    prev
      .map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i)
      .filter(i => i.qty > 0)
  );
};


  const removeFromCart = (id) => setCartItems(prev => prev.filter(i => i.id !== id));

  const cartCount = useMemo(() => cartItems.reduce((a, i) => a + i.qty, 0), [cartItems]);

  return (
    <Routes>
      {/* Sitio público: pasamos cartCount al layout y props a las páginas que lo usan */}
      <Route element={<MainLayout cartCount={cartCount} />}>
        <Route index element={<HomePage addToCart={addToCart} />} />
        <Route path="productos" element={<ProductsPage addToCart={addToCart} />} />
        {/* estos de aqui usan props*/}
        <Route path="carrito"element={
        <CartPage
          cartItems={cartItems}
          
          removeFromCart={removeFromCart}
          incrementQty={incrementQty}
          decrementQty={decrementQty}/>}/>
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="nosotros" element={<NosotrosPage />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registro" element={<RegisterPage />} />
      </Route>

      {/* Admin: sin relación con el carrito */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="productos" element={<AdminProductsPage />} />
        <Route path="usuarios" element={<AdminUsersPage />} />
      </Route>
    </Routes>
  );
}
