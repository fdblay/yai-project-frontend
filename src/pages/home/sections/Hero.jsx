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
        <button type='button' className='hero-button' onClick="location.href='#'">
          Shop Now
        </button>
      </div>

    </div>
  );
};

export default Hero;
