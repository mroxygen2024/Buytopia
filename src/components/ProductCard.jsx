import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product ,hideAddToCart= false }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.slug}`);
  };

  const handleAddToCart = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      toast.warning("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="cursor-pointer bg-white border border-green-200 text-green-900 rounded-xl shadow hover:shadow-lg transition p-4 dark:bg-gray-900">
      <div onClick={handleClick}>
        <img
          src={product.images?.[0] || "/placeholder.jpg"}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
        />
        <div className="mt-4">
          <h2 className="text-lg font-bold dark:text-[#35955c]">{product.name}</h2>
          <p className="text-sm text-green-700 dark:text-[#46855f]">{product.category?.name}</p>
          <p className="text-green-800 font-semibold mt-1 dark:text-[#23643d]">
            ETB {parseFloat(product.price).toFixed(2)}
          </p>

          {product.stock === 0 ? (
            <p className="text-red-600 text-sm font-bold mt-1">Out of Stock</p>
          ) : product.stock <= 3 ? (
            <p className="text-yellow-600 text-sm font-bold mt-1">Low Stock</p>
          ) : (
            <p className="text-green-600 text-sm font-bold mt-1 dark:text-[#35955c]">In Stock</p>
          )}
        </div>
      </div>

      {!hideAddToCart && (
        <Button
          className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded"
          onClick={product.stock === 0 ? () => toast.error("Out of stock!") : handleAddToCart}
          disabled={product.stock === 0}
        >
          <ShoppingBag className="mr-2" />
          {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
