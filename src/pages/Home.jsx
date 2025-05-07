import React, { useState, useEffect } from 'react';
import banner1 from '../assets/banner_img_01 (1).jpg';
import banner2 from '../assets/banner_img_02 (1).jpg';
import banner3 from '../assets/banner_img_03 (1).jpg';
import FeaturedProducts from './FeaturedProducts';

const slides = [
  {
    title: 'Buytopia ',
    subtitle: 'Modern and Minimal Shopping Experience',
    text: 'Buytopia is a sleek and responsive eCommerce web app built using React and a clean green UI design. It offers product listings, detail views, cart management, and user authentication.',
    img: banner1
  },
  {
    title: 'Buytopia ',
    subtitle: 'Fully Dynamic & API Integrated',
    text: 'This project features real-time product fetching from a custom backend API, dynamic cart functionality, and secure user login, registration, and logout features.',
    img: banner2
  },
  {
    title: 'Buytopia ',
    subtitle: 'Custom-Built with React',
    text: 'Developed from scratch using React and styled with a green palette, Buytopia delivers a clean UI, seamless navigation, and a complete frontend shopping experience.',
    img: banner3
  },
];


export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

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
      <div className="relative w-full overflow-hidden pt-15 bg-green-50">
       
        <div
          className="flex transition-transform duration-700 ease-in-out my-6"
          style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${slides.length * 32}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-10 min-h-[70vh] lg:min-h-[85vh]"
            >
            
              <div className="w-full lg:w-1/2 flex flex-col justify-center h-full pr-0 lg:pr-10">
                <h1 className="text-3xl md:text-5xl font-bold text-[#14532d] mb-4">{slide.title}</h1>
                <h3 className="text-xl md:text-2xl text-[#166534] mb-4">{slide.subtitle}</h3>
                <p className="text-[#4d7c0f] mb-6">{slide.text}</p>
                <a
                  href="/products"
                  className="bg-[#31af51] text-white px-6 py-3 rounded-full hover:bg-[#278a40] transition w-fit"
                >
                  Browse Products
                </a>
              </div>

              
              <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="max-w-full max-h-[500px] w-auto h-auto object-contain rounded-xl shadow-md"
                />
              </div>
            </div>
          ))}
        </div>

      
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-[#31af51] hover:text-[#1f7c3a] z-10"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-[#31af51] hover:text-[#1f7c3a] z-10"
        >
          ❯
        </button>

       
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === current ? 'bg-[#31af51]' : 'bg-[#a7e4bc]'
              }`}
            />
          ))}
        </div>
      </div>
      <FeaturedProducts/>
    </>
  );
}
