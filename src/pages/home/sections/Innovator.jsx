import React from 'react'
import '../../../styles/Innovator.css'

const Innovator = () => {
  return (
    <div className='innovator'>
      <h1>Meet the Innovator</h1>

      <div className='profile-container'>

        <img src="./" alt="Innovator's potrait image" />
        <div className='profile-vision'>
          <div className='profile'>
            <h2>Fatima Amadu</h2>
            <p>Hi, I'm Fatima Amadu, the founder of <strong>Fatimush Natural Spices</strong>. My journey began with a deep love for nature, sustainability of resources and a passion for creating healthier, tastier meals. Inspired by the incredible potential of mushrooms, I set out to redefine natural spices.</p>
          </div>

          <div className='vision'>
            <h2>My Vision</h2>
            <p>I believe in crafting products that not only enhance your cooking but also contribute to a healthier planet. Every spice blend we create is a testament to our commitment to quality, sustainability, and innovation.</p>
          </div>
        </div>

      </div>


    </div>
  )
};

export default Innovator;
