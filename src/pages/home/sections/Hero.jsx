import React, { useEffect } from 'react';
import '../../../styles/Hero.css';

const Hero = () => {
  useEffect(() => {
    // Add fonts to the document head
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Madimi+One&family=Montserrat:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1 className='hero-title'>
          Discover the world of Mushroom Spices
        </h1>
        <h2 className='hero-subtitle'>
          We offer the best natural spices made from organic mushrooms!
        </h2>
        <a href="https://paystack.shop/fatimush-natural-spice-shop" target='_blank' rel="noopener noreferrer">
          <button type='button' className='hero-button'>
            Shop Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
