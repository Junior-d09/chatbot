import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(()=> {
    const getHomeData = async () => {
     const response = await axios.get('/api/products');
     setProducts(response.data);
    };

    getHomeData();
  }, []);
  
  return (
    <>
      <Header cart={cart} />

      <title>Ecommerce Project</title>

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
