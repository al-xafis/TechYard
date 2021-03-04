import React, { Fragment } from 'react';
import './Title.css';

const Title = ({ title }) => {
  return (
    <Fragment>
      <div className="bar"></div>
      <h2 className="title">{title}</h2>
    </Fragment>
  )
};

export default Title;