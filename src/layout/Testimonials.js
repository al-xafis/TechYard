import React from 'react';
import Title from '../components/Title';
import './Testimonials.css';
import myboy from '../img/myboy.png'
import ButtonLeftRight from '../components/ButtonLeftRight';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials__title">
        <div className="testimonials__title__bar"></div>
        <h2 className="testimonials__title__text">We're trusted</h2>
      </div>
      <div className="testimonial__box">
        <div className="testimonial__buttons"><ButtonLeftRight /></div>
        <img src={myboy} alt="Billy Gach" className="testimonial__img"/>
        <div className="testimonial__info">
          <div className="testimonial__info__name">- Billy Gach</div>
          <p className="testimonial__info__p">“Finally, I have found a company I can rely on. Everything is just like I wanted and even with beautiful additions in design. And that is great!”</p>
        </div>
      </div>
 
    </div>
  )
};

export default Testimonials;

