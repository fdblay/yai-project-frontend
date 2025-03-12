import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import '../styles/Footer.css'

const Footer = () => {
  // Handle scroll to top when clicking links
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='footer'>

      <div className='footer-links'>
        <div className='brand-name'>
          <Link to="/" id='logo' onClick={handleLinkClick}>
          <img src="https://res.cloudinary.com/dbyeirmqw/image/upload/v1741761952/newLogoEdited_zel7rh.jpg" alt="" /></Link>
        </div>
        <div className='quick-links'>
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/about" onClick={handleLinkClick}>About</NavLink></li>
            <li><NavLink to="/products" onClick={handleLinkClick}>Products</NavLink></li>
            <li><NavLink to="/innovator" onClick={handleLinkClick}>Innovator</NavLink></li>
            <li><NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink></li>
          </ul>
        </div>
        <div className='legal-link'>
          <h4>Legal</h4>
          <ul>
            <li><a href="#" onClick={handleLinkClick}>Privacy Policy</a></li>
            <li><a href="#" onClick={handleLinkClick}>Terms of Service</a></li>
          </ul>
        </div>
        <div className='shop-link'>
          <h4>Shop</h4>
          <ul>
            <li><a href="https://paystack.shop/fatimush-natural-spice-shop" onClick={handleLinkClick}>Visit Our Shop</a></li>
          </ul>
        </div>
      </div>

      <div className='socials-link'>
        <p id="p-link">
        {/* Follow us on: */}
          <a href="https://www.instagram.com/fatimush_natural_spices?igsh=Y28yeHh1YmV3cTB2&utm_source=qr" target='_blank' id='a1'><FaInstagram /></a>
          <a href="https://www.facebook.com/share/1Dd2zVMjJR/?mibextid=wwXIfr" target='_blank'><FaFacebook /></a>
          {/* <a href=""><FaXTwitter /></a> */}
          <a href="https://www.tiktok.com/@fatimush.natural.spices?_t=ZM-8ucY43jL6kp&_r=1" target='_blank'><FaTiktok /></a>
        </p>
      </div>
      <p className="copyright">Copyright &copy; {new Date().getFullYear()} Fatimush Natural Spice. All Rights Reserved.</p>
    </div>
  )
}

export default Footer;
