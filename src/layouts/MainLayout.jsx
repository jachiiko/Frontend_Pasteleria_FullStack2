import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout({ cartCount = 0 }) {
  return (
    <>
      <Header cartCount={cartCount} />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
