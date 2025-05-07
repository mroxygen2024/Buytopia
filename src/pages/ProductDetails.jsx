// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { slug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://ecommerce-backend-tqgh.onrender.com/api/v1/products/${slug}`, { method: "GET" });
        if (res.ok) {
          const data = await res.json();
          setProduct(data.data.product);
        }
      } catch (err) {
        toast.error("Failed to load product.");
        console.error("Error loading product:", err);
      }
    };

    fetchProduct();
  }, [slug]);

  const getStockStatus = (stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock < 10) return "Low Stock";
    return "In Stock";
  };

  const handleAddToCart = () => {
    if (!product) return;
    const user = localStorage.getItem("user");
    if (!user) {
      toast.warning("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }
    addToCart(product);
    toast.success("Added to cart!");
  };

  if (!product) return <div className="p-6 text-green-800">Loading product...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-green-50 min-h-screen">
      <button
        onClick={() => navigate("/products")}
        className="mb-4 text-green-700 hover:underline flex items-center"
      >
        <ShoppingBag className="mr-2" /> ← Back to Products
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.images?.[0] || "/placeholder.jpg"}
          alt={product.name}
          className="w-full md:w-1/2 object-cover rounded-lg shadow-md"
        />

        <div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">{product.name}</h1>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-sm text-green-600 mb-1">Category: {product.category?.name}</p>
          <p className="text-lg font-semibold text-green-700 mb-1">Price: ETB {product.price}</p>
          <p className={`font-medium ${
            product.stock === 0
              ? "text-red-600"
              : product.stock < 10
              ? "text-yellow-600"
              : "text-green-700"
          }`}>
            {getStockStatus(product.stock)}
          </p>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
        disabled={product.stock === 0}
      >
        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductDetails;
