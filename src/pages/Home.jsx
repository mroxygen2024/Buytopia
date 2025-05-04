// // import React, { useState, useEffect } from 'react';
// // import banner1 from '../assets/banner_img_01.jpg';
// // import banner2 from '../assets/banner_img_02.jpg';
// // import banner3 from '../assets/banner_img_03.jpg';
// import Banner from '../components/Banner';
// import Products from './Products';

// // const slides = [
// //   {
// //     title: 'Zay eCommerce',
// //     subtitle: 'Tiny and Perfect eCommerce Template',
// //     text: 'Zay Shop is a custom HTML5 template. 100% free provided by TemplateMo. Images from Freepik Stories, Unsplash, and Icons8.',
// //     img: banner1,
// //   },
// //   {
// //     title: 'Proident occaecat',
// //     subtitle: 'Aliquip ex ea commodo consequat',
// //     text: 'Use this template for commercial websites. Do not re-distribute the ZIP file on template collections.',
// //     img: banner2,
// //   },
// //   {
// //     title: 'Repr in voluptate',
// //     subtitle: 'Ullamco laboris nisi ut',
// //     text: 'We offer free CSS templates. Support us by sharing TemplateMo or contributing via PayPal.',
// //     img: banner3,
// //   }
// // ];

// export default function Home() {
//   return (
//   <>
//    <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
//   <Banner/>
//   </div>
//   <Products/>
//   </>
//     );
// }

import React, { useState, useEffect } from 'react';
import banner1 from '../assets/banner_img_01.jpg';
import banner2 from '../assets/banner_img_02.jpg';
import banner3 from '../assets/banner_img_03.jpg';
import Products from './Products';

const slides = [
  {
    title: 'Zay eCommerce',
    subtitle: 'Tiny and Perfect eCommerce Template',
    text: 'Zay Shop is a custom HTML5 template. 100% free provided by TemplateMo. Images from Freepik Stories, Unsplash, and Icons8.',
    img: banner1
  },
  {
    title: 'Proident occaecat',
    subtitle: 'Aliquip ex ea commodo consequat',
    text: 'Use this template for commercial websites. Do not re-distribute the ZIP file on template collections.',
    img: banner2
  },
  {
    title: 'Repr in voluptate',
    subtitle: 'Ullamco laboris nisi ut',
    text: 'We offer free CSS templates. Support us by sharing TemplateMo or contributing via PayPal.',
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
    <div className="relative w-full overflow-hidden bg-white">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
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
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center h-full pr-0 lg:pr-10">
              <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">{slide.title}</h1>
              <h3 className="text-xl md:text-2xl text-gray-700 mb-4">{slide.subtitle}</h3>
              <p className="text-gray-600 mb-6">{slide.text}</p>
              <a
                href="/products"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition w-fit"
              >
                Browse Products
              </a>
            </div>

            {/* Image Section */}
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

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-green-600 z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-gray-600 hover:text-green-600 z-10"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? 'bg-green-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      
    </div>
    <Products/>
    </>
  );
}