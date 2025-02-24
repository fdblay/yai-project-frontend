import React from 'react'
import '../../../styles/About.css';


const About = () => {
  return (
    <div className='about-section'>
      <div className='overview'>
        <h1>About Us</h1>
        <p>
          At <strong>Fatimush Natural Spices</strong>, we believe in the power of nature to transform meals into unforgettable experiences.<br></br> Our <strong>mission</strong> is to create premium natural mushroom spices that bring health, flavor, and sustainability to every dish.
        </p>
      </div>
      <div className='story-values'>
        <div className='story'>
          <h2>Our Story</h2>
          <p>
            Our journey began with a passion for natural ingredients and a dream to bring the richness of mushrooms to kitchens worldwide. <br></br>
            From humble beginnings in <strong>Aboaso, Ashanti Region</strong>, we have grown into a trusted name for quality and innovation.
          </p>
        </div>
        <div className='values'>
          <h2>Our Values</h2>
          <ul className='value-list'>
            <li>
              <strong>Sustainability:</strong> Commited to eco-friendly farming and packaging, and addressing post-harvest loss.
            </li>
            <li>
              <strong>Health:</strong> Offering spices free from additives and preservatives.
            </li>
            <li>
              <strong>Community:</strong> Supporting local farmers and creating jobs.
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
};

export default About;
