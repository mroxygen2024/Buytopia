import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="border border-[#cceee1] bg-[#f3f9f6] rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
    >
      <div className="relative w-full h-48 mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-[#2a9f6a]">{product.name}</h2>
        <p className="text-sm text-[#5da88b]">{product.category.name}</p>
        <p className="text-md font-bold text-[#2a9f6a] mt-1">${product.price}</p>
        {product.stock === 0 ? (
          <p className="text-red-500 text-sm font-bold mt-1">Out of Stock</p>
        ) : product.stock <= 3 ? (
          <p className="text-red-500 text-sm font-bold mt-1">Low Stock</p>
        ) : (
          <p className="text-green-600 text-sm font-bold mt-1">In Stock</p>
        )}
      </div>
    </Link>
  );
}
