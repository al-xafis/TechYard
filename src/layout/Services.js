import React from 'react';
import './Services.css';
import card1 from '../img/card1.png';

const Services = () => {
  return (
    <div className="services">
      <h2 className="services__title">Services</h2>
      <div className="services__box">
        <div className="services__box__card">
          <img src={card1} alt="card img"/>
        </div>
      </div>
    </div>
  );
};

export default Services;