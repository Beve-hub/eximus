import Button from '@/component/ui/button/Button';
import React from 'react';

const HeroContent: React.FC = () => {
  return (
    <div className="relative z-20 h-full flex items-center px-6 md:px-16 lg:px-30">
      <div className="max-w-2xl text-left">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
          Engineering solutions today. Energy tomorrow.
        </h2>
        
        <p className="mt-6 text-lg md:text-2xl text-white/90 max-w-lg">
          Our goal is to consistently meet or exceed client requirements safely, responsibly and commercially.
        </p>

        <div className="mt-10">
          <Button 
            title="GET IN TOUCH" 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => alert('Clicked!')} />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;