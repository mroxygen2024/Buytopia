// import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products"; // ❌ Commented: we now fetch from API
// import { toast } from "react-toastify";

const Products = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await fetch("https://ecommerce-backend-tqgh.onrender.com/api/v1/analytics/products");
  //       const data = await res.json();
  //       setProducts(data.products); // ✅ Based on actual API response
  //     } catch (error) {
  //       toast.error("Failed to load products.");
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
