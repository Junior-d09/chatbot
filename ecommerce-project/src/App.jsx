import axios from 'axios';
import { Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import './App.css'

function App() {
    const [cart, setCart] = useState([]);

    useEffect(()=> {
    
        axios.get('/api/cart-items?expand=product') 
          .then((response)=> {
            setCart(response.data);
          });
    }, []);


  return (
    <Routes>
      <Route index element= {<HomePage cart={cart} />} />
      <Route path="/checkout" element= {<CheckoutPage cart={cart} />} />
      <Route path="/orders" element= {<OrdersPage />} />
    </Routes>
    
  )
}

export default App
