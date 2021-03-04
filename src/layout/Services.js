import React from 'react';
import './Services.css';
import card1 from '../img/webdevelopment1.png';
import card2 from '../img/card2.png';
import card3 from '../img/card3.png';
import card4 from '../img/card4.png';
import card5 from '../img/card5.png';
import card6 from '../img/card6.png';
import web_maintenance from '../img/web-maintenance.png';
import upload from '../img/upload1.png';
import phoneux from '../img/phoneux.png';
import mobileapp from '../img/mobile-app.png';
import display from '../img/display.png';
import engineering from '../img/engineering1.png';

const Services = () => {
  return (
    <div className="services">
      <h2 className="services__title">Services</h2>
      <div className="services__box">
        <div className="services__box__card gradient">
          <img src={card1} alt="card__img" className="card__img"/>
          <div className="card__info--blue">
            <img src={web_maintenance} alt="web maintenance img" className="card__info__img"/>
            <div className="card__info__box">
              <h3 className="card__info__title">Web Development</h3>
              <a href="#!"className="card__info__link">More</a>
            </div>
          </div>
        </div>
        <div className="services__box__card dark-gradient">
          <img src={card2} alt="card__img" className="card__img"/>
          <div className="card__info--white">
            <img src={upload} alt="web maintenance img" className="card__info__img"/>
            <div className="card__info__box">
              <h3 className="card__info__title">Business Research and Analytics</h3>
              <a href="#!"className="card__info__link">More</a>
            </div>
          </div>
        </div>
        <div className="services__box__card up-right light-gradient">
          <img src={card3} alt="card__img" className="card__img"/>
          <div className="card__info--blue">
            <img src={phoneux} alt="web maintenance img" className="card__info__img"/>
            <div className="card__info__box">
              <h3 className="card__info__title">UI/UX Design</h3>
              <a href="#!"className="card__info__link">More</a>
            </div>
          </div>
        </div>
        <div className="services__box__card dark-gradient">
          <img src={card4} alt="card__img" className="card__img"/>
          <div className="card__info--white">
            <img src={mobileapp} alt="web maintenance img" className="card__info__img"/>
            <div className="card__info__box">
              <h3 className="card__info__title">Mobile Development</h3>
              <a href="#!"className="card__info__link">More</a>
            </div>
          </div>
        </div>
        <div className="services__box__card light-gradient">
          <img src={card5} alt="card__img" className="card__img"/>
          <div className="card__info--blue">
            <img src={display} alt="web maintenance img" className="card__info__img"/>
            <div className="card__info__box">
              <h3 className="card__info__title">Online store</h3>
              <a href="#!"className="card__info__link">More</a>
            </div>
          </div>
        </div>
        <div className="services__box__card bottom-right dark-gradient">
          <img src={card6} alt="card__img" className="card__img"/>
          <div className="card__info--white">
            <img src={engineering} alt="web maintenance img" className="card__info__img"/>
            <div className="card__info__box">
              <h3 className="card__info__title">Automation</h3>
              <a href="#!"className="card__info__link">More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;