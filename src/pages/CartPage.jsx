import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-[#14532d]">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">No items in the cart.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <div
              key={item.slug}
              className="flex items-center justify-between gap-4 border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold text-[#166534]">{item.name}</h2>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-sm text-gray-700 font-medium">
                    Price: ETB {parseFloat(item.price).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                className="text-red-500 hover:text-red-700 font-medium"
                onClick={() => removeFromCart(item.slug)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <Link
        to="/products"
        className="inline-block mt-6 px-4 py-2 bg-[#31af51] text-white rounded hover:bg-[#278a40] transition"
      >
        ← Back to Products
      </Link>
    </div>
  );
};

export default CartPage;
