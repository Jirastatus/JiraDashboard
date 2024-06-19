// Navbar.js
import React from 'react';
import rad from './R.svg';
import './App.css';

const Navbar = () => {
  return (
    <div id='section1'>
      <div id='section2'>
        <div className='innerdiv'>
          <div className='middiv'>
            <img id='po' src={rad} alt='R.svg' />
            <div className='ind'>
              <h2 id='kl'>Jira</h2>
              <p id='ji'>by Google</p>
            </div>
          </div>
          <h1 className='k'>Global Service Status</h1>
        </div>
        <div id='innerdiv2'>
          <button className='stbtn'>Plans & Price</button>
          <select>
            <option>English (United States)</option>
            <option>Dansk</option>
            <option>Deutsch</option>
            <option>English (United Kingdom)</option>
            <option>Polski</option>
            <option>Nederlands</option>
            <option>Norsk</option>
          </select>
          <button className='strtbtn'>Start For Free</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
