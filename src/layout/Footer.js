import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__upper">
        <div className="footer__about">
          <h4 className="footer__about__h">Tech Yard Solutions</h4>
          <p className="footer__about__p">
            We are an IT Company that provides the best medium-class service on
            Internet. No matter what You need, our respectable Senior Developers
            and Powerful Senior Designers can implement it!
          </p>
        </div>
        <div className="footer__address">
          <h4 className="footer__address__h">Address</h4>
          <p className="footer__address__p">6100 Lake Ellenor Drive STE 174</p>
          <p className="footer__address__p">Orlando FL 32809</p>
        </div>
        <div className="footer__contactus">
          <h4 className="footer__address__h">Contact us</h4>
          <p className="footer__address__p">+1 707 867 0000</p>
          <p className="footer__address__p">info@techyardsolutions.com</p>
        </div>
      </div>
      <div className="footer__social">
        Follow Us: <i class="fab fa-telegram-plane footer__social__icon"></i> <i class="fab fa-instagram footer__social__icon"></i> <i class="fab fa-facebook-f footer__social__icon"></i>
      </div>
      <div className="footer__lower">
        <div className="footer__lower__copyright">Copyrights &nbsp; &nbsp; &nbsp; 2021 All Rights Reserved by Tech Yard Solutions</div>
        <div className="footer__lower__policy">Privacy policy</div>
      </div>
    </div>
  );
};

export default Footer;
