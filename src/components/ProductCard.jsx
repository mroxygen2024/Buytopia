// src/components/ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.slug}`);
  };

  const handleAddToCart = () => {
    const user = localStorage.getItem("user"); // ✅ Only add to cart if logged in
    if (!user) {
      toast.warning("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="cursor-pointer bg-background text-foreground rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <div onClick={handleClick}>
        <img
          src={product.images?.[0] || "/placeholder.jpg"} // ✅ fallback if no image
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-sm text-black">{product.category?.name}</p>
          <p className="text-foreground font-medium mt-1">
            ETB {parseFloat(product.price).toFixed(2)}
          </p>
          {/* ✅ Show stock status */}
          {product.stock === 0 ? (
            <p className="text-red-500 text-sm font-bold mt-1">Out of Stock</p>
          ) : product.stock <= 3 ? (
            <p className="text-red-500 text-sm font-bold mt-1">Low Stock</p>
          ) : (
            <p className="text-green-500 text-sm font-bold mt-1">In Stock</p>
          )}
        </div>
      </div>

      {/* ✅ Add to Cart button, disabled if out of stock */}
      <Button
        className="w-full mt-2 bg-primary text-primary-foreground"
        onClick={product.stock === 0 ? () => toast.error("Out of stock!") : handleAddToCart}
        disabled={product.stock === 0}
      >
        <ShoppingBag className="mr-2" />
        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default ProductCard;
