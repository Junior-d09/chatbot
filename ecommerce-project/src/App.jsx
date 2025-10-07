import axios from 'axios';
import { Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';
import { HomePage } from './pages/home/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

   const loadCart = async () => {
      try {
        const response = await axios.get('/api/cart-items?expand=product');
        setCart(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement du panier :', error);
        setCart([]); // sécurité en cas d'erreur
      }
    };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart} />} />
    </Routes>
  );
}

export default App;