import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [showNavbar, setShowNabar] = useState(false)

  const handleShowNavbar = () => {
    setShowNabar(!showNavbar)
  }

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <div className='navbar-brand'>
          <Link to="/" id='logo'>
          <img src="./src/assets/logoNoBg2.png" alt="Fatimush Natural Spices Brand Logo" />
          <p>Fatimush Natural Spice</p>
          </Link>
        </div>
        <div className='menu-icon' onClick={handleShowNavbar}>
          <BiMenu />
        </div>

        <div
          className={`navbar-items ${showNavbar && 'active'}`}
        >
          <ul>
            <li><NavLink to="/hero">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/innovator">Innovator</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
