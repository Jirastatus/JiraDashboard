
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import {Link} from 'react-router-dom';

const Section3 = () => {
  return (
    <div id='section3'>
      <div id='lj1'>
          <Link id='li' to='/incidenthistory'>Incident History</Link>
          <Link id='li' to='/Maintenance'>Maintenance</Link>
          <Link id='li' to='/Updates'>Updates</Link>
          <Link id='li' to='/Calendar'>Calendar</Link>
          <Link id='li' to='/Faq'>FAQ's</Link>
      </div>
      <div id='ik2'>
        <button id='ok'>
          <FontAwesomeIcon icon={faWifi} style={{ color: "#ffffff" }} />
        </button>
      </div>
    </div>
  );
};

export default Section3;
