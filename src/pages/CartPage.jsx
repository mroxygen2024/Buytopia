// src/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div key={item.slug} className="flex justify-between items-center border-b pb-2">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ETB {item.price}</p>
              </div>
              <button
                className="text-red-500 hover:underline"
                onClick={() => removeFromCart(item.slug)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <Link to="/products" className="bg-primary text-primary-foreground underline inline-block mt-6">
        ← Continue Shopping
      </Link>
    </div>
  );
};

export default CartPage;
