import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button"; 
import { ShoppingBag } from "lucide-react"; 
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.slug}`);
  };

  const handleAddToCart = () => {
    // Check if user is logged in
    const user = localStorage.getItem("user");

    if (!user) {
      // If not logged in, prompt to log in and redirect to login page
      alert("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    // If logged in, add to cart
    addToCart(product);
  };

  const handleOutOfStock = () => {
    alert("This product is out of stock and cannot be added to the cart.");
  };

  return (
    <div className="cursor-pointer bg-background text-foreground rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <div onClick={handleClick}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-sm text-black">{product.category.name}</p>
          <p className="text-foreground font-medium mt-1">ETB {parseFloat(product.price).toFixed(2)}</p>

          {product.stock === 0 ? (
            <p className="text-red-500 text-sm font-bold mt-1">Out of Stock</p>
          ) : product.stock <= 3 ? (
            <p className="text-red-500 text-sm font-bold mt-1">Low Stock</p>
          ) : (
            <p className="text-green-500 text-sm font-bold mt-1">In Stock</p>
          )}
        </div>
      </div>

      {/* Disable button if out of stock and show an alert */}
      <Button 
        className="w-full mt-2 bg-primary text-primary-foreground" 
        onClick={product.stock === 0 ? handleOutOfStock : handleAddToCart} // Call alert if out of stock
        disabled={product.stock === 0}  // Disable button if out of stock
      >
        <ShoppingBag className="mr-2" />
        {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default ProductCard;
