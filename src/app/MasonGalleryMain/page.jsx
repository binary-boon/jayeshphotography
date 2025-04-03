// src/app/MasonGalleryMain/page.jsx
"use client";

import MasonGallery from "../../components/MasonGallery/MasonGallery";

export default function MasonGalleryMain() {
  // Sample gallery images with varied heights to demonstrate masonry effect
  const MasonGalleryarr = [
    {
      id: 1,
      src: '/images/1.jpg',
      alt: 'Mountain landscape',
      width: 800,
      height: 600,
      caption: 'Mono Chromatic Closeup Photography',
      blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8U1v7HwAFHQIsHk3tFwAAAABJRU5ErkJggg==',
    },
    {
      id: 2,
      src: '/images/2.jpg',
      alt: 'Portrait photo',
      width: 600,
      height: 900,
      caption: 'Bridal Photography',
    },
    {
      id: 3,
      src: '/images/3.jpg',
      alt: 'Coffee cup',
      width: 800,
      height: 800,
      caption: 'Destination Couple Shoots',
    },
    {
      id: 4,
      src: '/images/4.jpg',
      alt: 'Ocean view',
      width: 800,
      height: 600,
      caption: 'Vivid Night Photography',
    },
    {
      id: 5,
      src: '/images/5.jpg',
      alt: 'City street',
      width: 600,
      height: 800,
      caption: 'Destination Pre Wedding Cinematography',
    },
    {
      id: 6,
      src: '/images/6.jpg',
      alt: 'Cityscape panorama',
      width: 1200,
      height: 500,
      caption: 'City skyline panorama',
    },
    {
      id: 7,
      src: '/images/7.jpg',
      alt: 'Forest path',
      width: 800,
      height: 600,
      caption: 'Trail through autumn forest',
    },
    {
      id: 8,
      src: '/images/8.jpg',
      alt: 'Architecture',
      width: 600,
      height: 900,
      caption: 'Modern architecture detail',
    },
    {
      id: 9,
      src: '/images/9.jpg',
      alt: 'Food photography',
      width: 800,
      height: 800,
      caption: 'Homemade dessert',
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <main className="py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h1>
        <p className="text-center mb-8 text-gray-600">
          Click on any image to view in lightbox mode with zoom capabilities
        </p>
        
        <MasonGallery images={MasonGalleryarr} />
      </main>
    </div>
  );
}