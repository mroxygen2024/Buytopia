
import React, {useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { toast } from "react-toastify";
// import products from "../data/products"; 

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://ecommerce-backend-tqgh.onrender.com/api/v1/products");
        const data = await res.json();
        setProducts(data.data.products); 
      } catch (error) {
        toast.error("Failed to load products.");
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6 max-w-screen-xl mx-auto pt-15 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.slug} className="p-0.5"> 
           <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
