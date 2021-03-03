import React from 'react';
import Navbar from '../components/Navbar';
import './Header.css';
import facebook from '../img/facebook.png';
import instagramm from '../img/instagramm.png';
import telegram from '../img/telegram.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header__background">
        <Navbar />
        <div className="header__box">
          <h1 className="header__box__title">Tech Yard</h1>
          <div className="header__box__subtitle">Solutions</div>
          <div className="header__box__description">Your digital knight</div>
          <button className="header__box__btn">More</button>
        </div>
        <div className="header__social">
          Follow Us: <i class="fab fa-telegram-plane header__social__icon"></i> <i class="fab fa-instagram header__social__icon"></i> <i class="fab fa-facebook-f header__social__icon"></i>
        </div>
      </div>
    </div>
  )
};

export default Header;