import React from 'react';
import './Company.css';
import quality from '../img/quality.png';
import calculator from '../img/calculator.png';
import support from '../img/24-hours-support.png';
import landingpage from '../img/landing-page.png';
import analytics from '../img/analytics.png';
import idea from '../img/idea.png';

const Company = () => {
  return (
    <div className="company">
      <div className="company__info">
        <h2 className="company__title">
          Tech Yard &#8211; Your Favorite IT Company
        </h2>
        <p className="company__description">
          “Get Rid of All Digital Problems with Tech Yard!
          We are an IT Company that provides the best medium-class service on Internet. No matter what You need, our respectable Senior Developers and Powerful Senior Designers can implement it! 
        </p>
        <p className="company__description">
          Our distinctive feature - we do not target Premium or Low-class. Applications, websites, design – we work only with the middle segment and try to become the best software company in the World.”
        </p>
      </div>
      <div className="company__advantages">
        <h3 className="company__advantages__title">
          Our advantages
        </h3>
        <div className="advantages">
          <div className="advantages__col-1">
            <div className="advantage">
              <img src={quality} alt="high quality img" className="advantage__img"/>
              <div className="advantage__info">
                <div className="advantage__info__title">
                  High Quality
                </div>
                <p className="advantage__info__description">Better put in more effort, but do it perfect the first time - we respect your time and care about our reputation.</p>
              </div>
            </div>
            <div className="advantage">
              <img src={calculator} alt="high quality img" className="advantage__img"/>
              <div className="advantage__info">
                <div className="advantage__info__title">
                  Reasonable Cost
                </div>
                <p className="advantage__info__description">Every penny has a value. You watch the development process and see in detail where each coin goes.</p>
              </div>
            </div>
            <div className="advantage">
              <img src={support} alt="high quality img" className="advantage__img"/>
              <div className="advantage__info">
                <div className="advantage__info__title">
                  24/7 Support
                </div>
                <p className="advantage__info__description">A specialist is always there. Don't worry - our products do not fail, however, if anything calls to question, You can contact us at any of the 168 hours of the 7 days of the week.</p>
              </div>
            </div>
          </div>
          <div className="advantages__col-2">
            <div className="advantage">
              <img src={landingpage} alt="high quality img" className="advantage__img"/>
              <div className="advantage__info">
                <div className="advantage__info__title">
                  Responsive Design
                </div>
                <p className="advantage__info__description">No matter how brilliant a product is if it doesn't look so. Our works are beautiful from any device.</p>
              </div>
            </div>
            <div className="advantage">
              <img src={analytics} alt="high quality img" className="advantage__img"/>
              <div className="advantage__info">
                <div className="advantage__info__title">
                  Talented Business Analysts
                </div>
                <p className="advantage__info__description">To create a useful product, we need to understand not only the business but also the niche. You don't have to tell us anything about your competitors, the state of the market, and so on - we will take care of everything ourselves.</p>
              </div>
            </div>
            <div className="advantage">
              <img src={idea} alt="high quality img" className="advantage__img"/>
              <div className="advantage__info">
                <div className="advantage__info__title">
                  Experienced Team
                </div>
                <p className="advantage__info__description">Enough experience. We have 5 well-known companies and more than 50 successful projects on the account. We are young and this is our advantage - we are closer to technology get on well with multitasking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Company;