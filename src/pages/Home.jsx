// import React, { useState, useEffect } from 'react';
// import banner1 from '../assets/banner_img_01.jpg';
// import banner2 from '../assets/banner_img_02.jpg';
// import banner3 from '../assets/banner_img_03.jpg';
import Banner from '../components/Banner';
import Products from './Products';

// const slides = [
//   {
//     title: 'Zay eCommerce',
//     subtitle: 'Tiny and Perfect eCommerce Template',
//     text: 'Zay Shop is a custom HTML5 template. 100% free provided by TemplateMo. Images from Freepik Stories, Unsplash, and Icons8.',
//     img: banner1,
//   },
//   {
//     title: 'Proident occaecat',
//     subtitle: 'Aliquip ex ea commodo consequat',
//     text: 'Use this template for commercial websites. Do not re-distribute the ZIP file on template collections.',
//     img: banner2,
//   },
//   {
//     title: 'Repr in voluptate',
//     subtitle: 'Ullamco laboris nisi ut',
//     text: 'We offer free CSS templates. Support us by sharing TemplateMo or contributing via PayPal.',
//     img: banner3,
//   }
// ];

export default function Home() {
  return (
  <>
   <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">
  <Banner/>
  </div>
  <Products/>
  </>
    );
}
