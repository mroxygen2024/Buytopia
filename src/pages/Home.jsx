// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import Products from './Products';
import Banner1 from '../assets/banner_img_01.jpg';
import Banner2 from '../assets/banner_img_02.jpg';
import Banner3 from '../assets/banner_img_03.jpg';

const products = [
  {
    id: "96d48b1c-7c86-45c7-8d3d-6ee9d03545bb",
    name: "Car Wax",
    slug: "car-wax",
    description: "Premium car wax for long-lasting shine and protection.",
    price: "24.99",
    images: Banner1,
  },
  {
    id: "969fb2e9-b6c6-4bb2-9ca6-4114ba620a71",
    name: "Tire Pressure Gauge",
    slug: "tire-pressure-gauge",
    description: "Digital tire pressure gauge with backlit display.",
    price: "14.99",
    images: Banner2,
  },
  {
    id: "85dc76bb-70e4-4d0e-91c8-a0f49a845d2d",
    name: "Car Phone Mount",
    slug: "car-phone-mount",
    description: "Adjustable phone mount for dashboard or windshield.",
    price: "19.99",
    images: Banner3,
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const total = products.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goToSlide = (index) => setCurrent(index);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden bg-background text-for">
        {/* Slide Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${products.length * 100}%`,
          }}
        >
          {products.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-10 min-h-[70vh] lg:min-h-[85vh]"
            >
              {/* Text Section */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center h-full pr-0 lg:pr-10">
                <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
                  {slide.name}
                </h1>
                <h3 className="text-xl md:text-2xl text-gray-700 mb-4">
                  {slide.description}
                </h3>
                <a
                  href="/products"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-opacity-60 transition w-fit"
                >
                  Browse Products
                </a>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
                <img
                  src={slide.images}
                  alt={`Slide ${index + 1}`}
                  className="max-w-full max-h-[500px] w-auto h-auto object-contain rounded-xl shadow-md"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-yellow-600 z-10"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-yellow-600 z-10"
        >
          ❯
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === current ? 'bg-yellow-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <Products />
    </>
  );
}
