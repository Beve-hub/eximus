'use client';

import React from 'react';
import BackgroundSlider from './component/BackgroundSlider';
import HeroContent from './component/HeroContent';

import IMAGE1 from '../../public/assests/bbbbnnn.jpg';
import IMAGE2 from '../../public/assests/image.png';
import IMAGE3 from '../../public/assests/Gemini_Generated_Image_iwdurgiwdurgiwdu.png';

const Hero: React.FC = () => {
  const images: string[] = [
    IMAGE1.src,
    IMAGE2.src,
    IMAGE3.src,
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <BackgroundSlider images={images} />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
      
      <HeroContent />
    </div>
  );
};

export default Hero;