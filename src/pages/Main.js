import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Achievements from '../layout/Achievements';
import Company from '../layout/Company';
import ContactUs from '../layout/ContactUs';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import OurTeam from '../layout/OurTeam';
import Partners from '../layout/Partners';
import Services from '../layout/Services';
import Story from '../layout/Story';
import Testimonials from '../layout/Testimonials';

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Company />
      <Services />
      <Achievements />
      <Story />
      <Partners />
      <OurTeam />
      <Testimonials />
      <ContactUs />
      <Footer />
    </Fragment>
    
  )
};

export default Main;