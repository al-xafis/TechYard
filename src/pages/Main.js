import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Company from '../layout/Company';
import Header from '../layout/Header';
import Services from '../layout/Services';

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Company />
      <Services />
    </Fragment>
    
  )
};

export default Main;