import React from 'react';
import Title from '../components/Title';
import './Partners.css';
import clients1 from '../img/clients_1.png'
import clients2 from '../img/clients_2.png'
import clients3 from '../img/clients_3.png'
import ambient from '../img/ambient.png'
import logoline1 from '../img/logo_line1.png'
import ButtonLeftRight from '../components/ButtonLeftRight';


const Partners = () => {
  return (
    <div className="partners">
      <Title title="Our partners" />
      <div className="partners__box">
        <div className="partners__box__buttons">
        <ButtonLeftRight /> 
        </div>
        <div className="partners__card">
          <img src={clients1} alt="allstate cargo" className="partners__card__img" />
          <img src={clients2} alt="allstate cargo" className="partners__card__img" />
          <img src={clients3} alt="allstate cargo" className="partners__card__img" />
          <img src={ambient} alt="allstate cargo" className="partners__card__img" />
          <img src={logoline1} alt="allstate cargo" className="partners__card__img partners__exception" />
        </div>
      </div>
    </div>
  )
};

export default Partners;