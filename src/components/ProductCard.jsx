import React from "react";
import { useNavigate } from "react-router-dom";
import { Button} from "../components/ui/button"; 
import { ShoppingBag } from "lucide-react"; 
import { useCart } from '../contexts/CartContext';


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.slug}`);

  };

  return (
    <div
      className="cursor-pointer bg-background text-foreground rounded-xl overflow-hidden shadow hover:shadow-lg transition"
    >
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

      <Button className="w-full mt-2 bg-primary text-primary-foreground" onClick={() => addToCart(product)}>
        <ShoppingBag className="mr-2" />
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
