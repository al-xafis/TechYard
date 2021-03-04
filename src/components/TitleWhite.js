import React, { Fragment } from 'react';
import './TitleWhite.css';

const TitleWhite = ({ title }) => {
  return (
    <Fragment>
      <div className="bar__white"></div>
      <h2 className="title__white">{title}</h2>
    </Fragment>
  )
};

export default TitleWhite;