import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { ShoppingBag } from "lucide-react"; 

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.slug === slug);

  console.log("Slug:", slug);
  console.log("Matched product:", product);
  
  if (!product) {
    return <div className="p-6">Product not found.</div>;
  }

  const getStockStatus = (stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock < 10) return "Low Stock";
    return "In Stock";
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <Button onClick={() => navigate("/products")} className="mb-4 text-blue-600 hover:underline">
        <ShoppingBag className="mr-2" />
        ← Back to Products
      </Button>

      <div className="flex flex-col md:flex-row gap-6">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full md:w-1/2 object-cover rounded-lg shadow-md"
      />

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-sm text-gray-500 mb-1">Category: {product.category.name}</p>
          <p className="text-lg font-semibold mb-1">Price: ETB ${product.price}</p>
          <p
            className={`font-medium ${
              product.stock === 0
                ? "text-red-600"
                : product.stock < 10
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            {getStockStatus(product.stock)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
