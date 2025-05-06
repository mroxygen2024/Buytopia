import React from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/productsData";

export default function Products() {
  return (
    <main className="p-6 bg-[#f3f9f6] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-[#2a9f6a]">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
