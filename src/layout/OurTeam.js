import React from 'react';
import './OurTeam.css';
import ourteamline from '../img/ourteam_line.png';
import TitleWhite from '../components/TitleWhite';

const OurTeam = () => {
  return (
    <div className="ourteam">
      <img src={ourteamline} alt="line" className="ourteam_lines"/>
        <div className="ourteam__title">
          <TitleWhite title="Our Team"/>
        </div>
    </div>
  );
};

export default OurTeam;