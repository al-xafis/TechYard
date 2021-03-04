import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contactus">
      <div className="contactus__box">
        <div className="contactus__title">Contact Us</div>
        <form action="" className="contactus__form">
          <input type="text" className="contactus__input" placeholder="Your name"/>
          <input type="text" className="contactus__input"
          placeholder="Phone number"/>
          <input type="email" className="contactus__input"
          placeholder="Your email"/>
          <input type="text" className="contactus__input"
          placeholder="Send message"/>
        </form>
        <button className="contactus__button">Send</button>
      </div>
      <div className="contactus__info">
        <h3 className="contactus__info__title">Let's work the problem</h3>
        <p className="contactus__info__p">You can contact us yourself via contact numbers or email, or simply fill out a form, briefly disclose the problem, and we will contact you within 24 hours</p>
      </div>
    </div>
  )
};

export default ContactUs;