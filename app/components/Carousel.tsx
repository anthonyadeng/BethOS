'use client';

import Image from 'next/image';

const Carousel: React.FC = () => {
  const images = [
    '/carousel/b1.JPG',
    '/carousel/b2.PNG',
    '/carousel/b3.PNG',
    '/carousel/b4.png',
    '/carousel/b5.png',
    '/carousel/b6.png',
  ];
  const translateXValues = ['0', '-110', '85', '-40', '100', '-100'];

  const translateYValues = [10, 100, 150, 175, 225, 300];

  return (
    <div className=' font-sans text-zinc-800 h-screen w-1/2 relative m-auto pointer-events-none pl-24 py-4'>
      <div className='image-stack'>
        {images.map((image, index) => (
          <Image
            key={index}
            height={500}
            width={384}
            src={image}
            alt={`Slide ${index}`}
            className={`m-24 mb-24 absolute z-10  shadow-orange-600 shadow-2xl`}
            style={{
              transform: `translateX(${translateXValues[index]}%) translateY(${translateYValues[index]}%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
