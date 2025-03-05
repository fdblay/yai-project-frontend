import React from 'react'
import '../../../styles/About.css';


const About = () => {
  return (
    <div className='about-section'>
      <div className='overview'>
        <h1> <span id='about-span'>About</span> Us</h1>
        <p>
          At <strong> Fatimush Natural Spices</strong>, we believe in the power of nature to transform meals into unforgettable experiences.<br></br> <br /> Our <strong>mission</strong> is to create premium natural mushroom spices that bring health, flavor, and sustainability to every dish.
        </p>
      </div>
      <div className='story-values'>
        <div className='story'>
          <h2>Our Story</h2>
          <p>
            Our journey began with a passion for natural ingredients and a dream to bring the richness of mushrooms to kitchens worldwide. <br></br>
            From humble beginnings in <strong>Offinso, Ashanti Region</strong>, we have grown into a trusted name for quality and innovation.
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
      <h1 id='choose'>Why Fatimush Natural Spices?</h1>
      <div className='problem-solution'>
      <div className='problem'>
          <h2>The Problem</h2>
          <p>
            {/* People with chronic diseases like diabetes, struggle to consume meat due to its cholestrol content and potential health risks. <br /> 
            This limits their access to essential proteins needed for proper nutrition. <br />
            Hence, a need for a healthier alternative that provides the necessary protein nutrients without the negative effects of meat consumption. */}
            Many consumers struggle to find natural, flavorful, and healthy alternatives to conventional spices that not only enhance the taste of their meals but also provide added health benefits.<br />With growing concerns over synthetic additives and high sodium content in traditional seasonings, there is a rising demand for all-natural, nutrient-rich spices that support overall well-being without compromising flavor.
          </p>
        </div>
        <div className='solution'>
          <h2>The Solution</h2>
          <p>
            Mushroom-based spice<span id='solu'>!</span> provides an innovative solution by offering a unique blend of umami-rich flavor and extraordinary health benefits. <br />
            Packed with natural nutrients like antioxidants, vitamins, and minerals, mushrooms spices are free from synthetic additives and promote hearth health, boost immunity, and support gut health.
            They are an excellent low-sodium alternative for health-conscious consumers seeking to enrich their meals with natural, wholesome ingredients.
          </p>
        </div>
      </div>

    </div>
  )
};

export default About;
