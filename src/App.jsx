import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from './contexts/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <main className="min-h-screen">
          <AppRoutes />
          <ToastContainer position="top-right" autoClose={3000} />
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}
