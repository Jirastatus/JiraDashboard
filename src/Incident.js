import React from 'react';
import './App.css';


const Incident = () => {
  return (
    <div id='iu'>
      <div id='ih1'>
        <div id='ih2'>
          <h1>Incident History</h1>
        </div>
        <div id='ih3'>
          <p>View the incident history for up to the last 90 days.</p>
        </div>
      </div>
      <div id='ih4'>
        <h1>Incident details</h1>
      </div>
      <div id='ih5'>
        <input type='text' placeholder="Jira Service"/>
        <button id='btn'>Search</button>
      </div>
      <div id='tb'>
        <table className='incident-table'>
          <thead>
            <tr>
            <th>Reference #</th>
            <th>Occur Date</th>
            <th>Location</th>
            <th>Sector</th>
            <th>Jira Service</th>
            <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123456</td>
              <td>2024-06-19</td>
              <td>New York</td>
              <td>IT</td>
              <td>Jira Meeting</td>
              <td>Network outage during the meeting</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Incident
