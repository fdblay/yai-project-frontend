import React from 'react';
import '../../../styles/Hero.css';

const Hero = () => {

  return (
    <div className='hero'>
      <div className='hero-content'>
        <h1 className='hero-title'>
          Discover the Mushroom World
        </h1>
        <h2 className='hero-subtitle'>
          we offer the best natural spices made from organic mushroms!
        </h2>
        <a href="https://paystack.shop/fatimush-natural-spice-shop" target='_blank' >
          <button type='button' className='hero-button' >
            Shop Now
          </button>
        </a>
      </div>

    </div>
  );
};

export default Hero;
