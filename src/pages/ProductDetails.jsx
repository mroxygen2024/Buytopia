import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { slug } = useParams(); // Extract the slug from the URL params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/products/${slug}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data.product);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching product details:', err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  if (!product) return <div className="text-center mt-10">Product not found.</div>;

  const { name, category, price, description, thumbnail, stock } = product;

  const stockStatus =
    stock === 0 ? 'Out of Stock' :
    stock < 5 ? 'Low Stock' : 'In Stock';

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex gap-6">
        <img
          src={thumbnail}
          alt={name}
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">{name}</h2>
          <p className="text-sm text-gray-500 mb-2">{category}</p>
          <p className="text-blue-600 text-xl font-semibold mb-2">${price}</p>
          <p className="text-sm text-gray-700 mb-4">{description}</p>
          <p className={`text-sm ${stock === 0 ? 'text-red-500' : 'text-green-500'}`}>
            {stockStatus}
          </p>
          <Link
            to="/products"
            className="mt-4 inline-block text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
