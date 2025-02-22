import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import Innovator from './sections/Innovator';
import Contact from './sections/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Innovator />
      <Contact />
    </div>
  );
};

export default Home;
