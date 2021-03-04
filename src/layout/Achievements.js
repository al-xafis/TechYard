import React from 'react';
import './Achievements.css';
import achievementslines from '../img/achievementslines.png';
import support1 from '../img/support1.png';
import briefing from '../img/briefing.png';
import clock from '../img/clock.png';
import group1 from '../img/group1.png';
import trustedimg from '../img/trusted_img.jpg'

const Achievements = () => {
  return (
    <div className="achievements">
      <img src={achievementslines} alt="lines" className="achievements_lines"/>
      <div className="achievements__content">
        <div className="achievements__content__left">
        <div className="achievements__content__left__bar"></div>
        <h3 className="achievements__content__left__title">Our achieve</h3>
        <div className="achievements__content__left__box">
          <img src={support1} alt="support icon" className="achievements__icon" />
          <p className="achievements__icon__p">30</p>
        </div>
        <div className="achievements__content__left__box">
          <img src={briefing} alt="briefing icon" className="achievements__icon" />
          <p className="achievements__icon__p">170</p>
        </div>
        <div className="achievements__content__left__box">
          <img src={clock} alt="clock icon" className="achievements__icon" />
          <p className="achievements__icon__p">1.300.000</p>
        </div>
        <div className="achievements__content__left__box">
          <img src={group1} alt="group icon" className="achievements__icon" />
          <p className="achievements__icon__p">150</p>
        </div>
        
        </div>
        <div className="achievements__content__right">
          <img src={trustedimg} alt="trusted img" className="achievements__content__right__img"/>
          <div className="achievements__content__right__box">
            <h5 className="trusted">We're trusted</h5>
            <div className="trusted__description__box">
              <p className="trusted__description__p">A young team does not mean that without experience:</p>
              <p className="trusted__description__p">30 Members from Developers to Copywriters</p>
              <p className="trusted__description__p">170 realized applications</p>
              <p className="trusted__description__p">About 1.3 mln total worked hours</p>
              <p className="trusted__description__p">About 150 pleased clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;