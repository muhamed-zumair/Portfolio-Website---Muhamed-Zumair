import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#about">About me</a>
        <a href="#services">Services</a>
      </div>
      
      <div className="nav-logo">
        {/* Replace with your actual logo file name if different */}
        <img src="/logo.png" alt="MZ Logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <a href="#portfolio">Portofolio</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;