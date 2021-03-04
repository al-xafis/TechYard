import React from 'react';
import Title from '../components/Title';
import './Story.css';
import story from '../img/story.jpg'

const Story = () => {
  return (
    <div className="story">
      <Title title="Some Good Stories"/>
      <div className="story__content">
        <img src={story} alt="story img" className="story__content__img"/>
        <div className="story__content__box">
          <h2 className="story__content__title">Atlantic Cargo</h2>
          <p className="story__content__description">“Android, IOS app development, UI and UX beautiful design, web-application, - nothing to worry about because Perfectness is what our project managers love. We use iterative development methodology (ссылка) to pay 100% attention to every single part of the project but still finish everything on time.”</p>
          <div className="next">
            <div className="next__text">Next</div>
            <button className="next__button"><i class="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;