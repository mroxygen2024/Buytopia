import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { name, category, price, thumbnail, slug, stock } = product;

  const stockStatus =
    stock === 0 ? 'Out of Stock' :
    stock < 5 ? 'Low Stock' : 'In Stock';

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <img
        src={thumbnail}
        alt={name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{category}</p>
      <p className="text-blue-600 font-bold">${price}</p>
      {stock < 5 && (
        <p className="text-red-500 text-sm font-medium mt-1">
          {stockStatus}
        </p>
      )}
      <Link
        to={`/products/${slug}`}
        className="block mt-3 text-center bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
