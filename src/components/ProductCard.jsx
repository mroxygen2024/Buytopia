import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="border border-[#d2b7a0] bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
    >
      <div className="relative w-full h-48 mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-[#79443B]">{product.name}</h2>
        <p className="text-sm text-[#a88c7c]">{product.category.name}</p>
        <p className="text-md font-bold text-[#79443B] mt-1">${product.price}</p>
        {product.stock <= product.lowStockAlert && (
          <span className="mt-2 inline-block text-sm text-red-600 font-semibold">
            Low Stock
          </span>
        )}
      </div>
    </Link>
  );
}
