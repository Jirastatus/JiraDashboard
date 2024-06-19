
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faPlus } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const Section4 = () => {
  return (
    <div id='section5'>
      <div id='web'>
        <div className='inweb'>
          <h4 className='lo'>Jira Meetings</h4>
        </div>
        <div className='sec2'>
          <p className='km'>Operational</p>
          <FontAwesomeIcon icon={faWifi} />
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
      <div id='wer'>
        <div className='inweb'>
          <h4 className='lo'>Jira App</h4>
        </div>
        <div className='sec2'>
          <p className='km'>Operational</p>
          <FontAwesomeIcon icon={faWifi} />
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </div>
  );
};

export default Section4;
