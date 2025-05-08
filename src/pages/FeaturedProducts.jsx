import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { toast } from 'react-toastify';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`);
        const data = await res.json();
        const allProducts = data.data.products;
        const featured = allProducts.slice(0, 3); 
        setProducts(featured);
      } catch (error) {
        toast.error("Failed to load featured products.");
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6 max-w-screen-xl mx-auto bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} hideAddToCart/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
