import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">Tech Yard</div>
      <div className="navbar__nav__container">
      <nav className="navbar__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="" className="nav__link">Home</a>
          </li>
          <li className="nav__item">
            <a href="#!" className="nav__link">Services</a>
          </li>
          <li className="nav__item">
            <a href="#!" className="nav__link">About Us</a>
          </li>
          <li className="nav__item">
            <a href="#!" className="nav__link">Case Studies</a>
          </li>
          <li className="nav__item">
            <a href="#!" className="nav__link">Contacts</a>
          </li>
        </ul> 
      </nav>
      </div>
    </div>
  )
};

export default Navbar;