import React, { useState, useEffect } from 'react';
import banner1 from '../assets/banner_img_01.jpg';
import banner2 from '../assets/banner_img_02.jpg';
import banner3 from '../assets/banner_img_03.jpg';

const slides = [
  {
    title: 'Zay eCommerce',
    subtitle: 'Tiny and Perfect eCommerce Template',
    text: 'Zay Shop is a custom HTML5 template. 100% free provided by TemplateMo. Images from Freepik Stories, Unsplash, and Icons8.',
    img: banner1,
  },
  {
    title: 'Proident occaecat',
    subtitle: 'Aliquip ex ea commodo consequat',
    text: 'Use this template for commercial websites. Do not re-distribute the ZIP file on template collections.',
    img: banner2,
  },
  {
    title: 'Repr in voluptate',
    subtitle: 'Ullamco laboris nisi ut',
    text: 'We offer free CSS templates. Support us by sharing TemplateMo or contributing via PayPal.',
    img: banner3,
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);
  const goToSlide = (index) => setCurrent(index);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full bg-gray-100 overflow-hidden">
      {/* Slides */}
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)`, width: `${total * 100}%` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 flex flex-col lg:flex-row items-center px-6 py-12 lg:py-20 lg:px-24">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <h1 className="text-4xl font-bold text-green-600 mb-3">{slide.title}</h1>
              <h3 className="text-2xl font-semibold mb-4">{slide.subtitle}</h3>
              <p className="text-gray-700">{slide.text}</p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={slide.img} alt={`Slide ${index + 1}`} className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl text-gray-600 hover:text-green-600">
        ❮
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl text-gray-600 hover:text-green-600">
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-green-600' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
