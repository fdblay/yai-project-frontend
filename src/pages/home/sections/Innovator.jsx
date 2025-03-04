import React, { useEffect } from 'react'
import { FaLeaf, FaLightbulb, FaSeedling } from 'react-icons/fa';
import '../../../styles/Innovator.css'

const Innovator = () => {
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
    <div className='innovator-wrapper'>
      <div className='innovator-container'>
        <div className='innovator-intro' data-aos="fade-down">
          <h1>Meet the <span className='highlight-span'>Innovator</span></h1>
          <p>Discover the story and vision behind Fatimush Natural Spices, where passion meets innovation in creating sustainable, healthy spice blends.</p>
        </div>

        <div className='innovator-content'>
          <div className='innovator-image' data-aos="fade-right">
            <div className='image-container'>
              <img src="https://res.cloudinary.com/dbyeirmqw/image/upload/v1741090847/DALL_E_2025-03-04_12.20.13_-_A_young_African_lady_with_a_bright_smile_sitting_in_a_natural_outdoor_setting_with_vibrant_green_foliage_in_the_background._She_has_a_modern_stylish_oeky16.webp" alt="Innovator's portrait image" />
            </div>
          </div>

          <div className='innovator-details' data-aos="fade-left">
            <div className='profile-card'>
              <h3>Fati Amadu</h3>
              <span className='title'>Founder & CEO</span>
              <p>Hi, I'm Fati Amadu, the founder of <strong>Fatimush Natural Spices</strong>. My journey began with a deep love for nature, sustainability of resources and a passion for creating healthier, tastier meals. Inspired by the incredible potential of mushrooms, I set out to redefine natural spices.</p>
            </div>

            <div className='values-grid'>
              <div className='value-card'>
                <div className='icon-circle'>
                  <FaLeaf />
                </div>
                <h4>Sustainability</h4>
                <p>Committed to eco-friendly practices and sustainable resource management.</p>
              </div>

              <div className='value-card'>
                <div className='icon-circle'>
                  <FaLightbulb />
                </div>
                <h4>Innovation</h4>
                <p>Continuously exploring new ways to enhance natural spice blends.</p>
              </div>

              <div className='value-card'>
                <div className='icon-circle'>
                  <FaSeedling />
                </div>
                <h4>Vision</h4>
                <p>Creating products that enhance cooking while contributing to a healthier planet.</p>
              </div>
            </div>

            <div className='vision-card'>
              <h3>My Vision</h3>
              <p>I believe in crafting products that not only enhance your cooking but also contribute to a healthier planet. Every spice blend we create is a testament to our commitment to quality, sustainability, and innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Innovator;
