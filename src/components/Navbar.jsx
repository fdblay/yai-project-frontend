import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  // Toggles the menu
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // Closes the menu when a nav item is clicked and scrolls to top
  const handleNavLinkClick = () => {
    setShowNavbar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClickOutside = (event) => {
    const navbar = document.querySelector('.navbar-items');
    const menuIcon = document.querySelector('.menu-icon');
    if (
      navbar &&
      !navbar.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      setShowNavbar(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-brand">
          <Link to="/" id="logo" onClick={handleNavLinkClick}>
            <img src="https://res.cloudinary.com/dbyeirmqw/image/upload/v1741761952/newLogoEdited_zel7rh.jpg" alt="Fatimush Natural Spices Brand Logo" />
            {/* <p>Fatimush Natural Spices</p> */}
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <BiMenu />
        </div>

        <div className={`navbar-items ${showNavbar ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink to="/hero" onClick={handleNavLinkClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleNavLinkClick}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={handleNavLinkClick}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/innovator" onClick={handleNavLinkClick}>
                Innovator
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleNavLinkClick}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
