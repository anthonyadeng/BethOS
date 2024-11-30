'use client';

import React, { useState } from 'react';
import './Carousel.css';
import Image from 'next/image';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/carousel/b1.JPG',
    '/carousel/b2.PNG',
    '/carousel/b3.PNG',
    '/carousel/b4.png',
    '/carousel/b5.png',
    '/carousel/b6.png',
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className='carousel font-sans text-zinc-800 h-[750px] w-[600px] relative overflow-hidden m-auto'>
      <button
        onClick={handlePrevious}
        className='pointer-events-auto
      absolute top-1/2 -translate-y-1/2'
      >
        {'<-'}
      </button>
      <div className='image-stack'>
        {images.map((image, index) => (
          <Image
            key={index}
            height={500}
            width={384}
            src={image}
            alt={`Slide ${index}`}
            className={`carousel-image absolute top-0 left-0 opacity-20 active:opacity-100 transition-opacity ${
              index === currentIndex ? 'active' : ''
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          />
        ))}
      </div>
      <button
        onClick={handleNext}
        className='pointer-events-auto
      absolute top-1/2 -translate-y-1/2'
      >
        {' ->'}
      </button>
    </div>
  );
};

export default Carousel;
