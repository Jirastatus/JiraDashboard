import React from 'react'

const UPdate = () => {
  return (
    <div id='iu'>
      <div id='ih1'>
        <div id='ih2'>
          <h1>Updates</h1>
        </div>
        <div id='ih3'>
          <p>View the version history and enhancements</p>
        </div>
      </div>
      <div id='ih4'>
        <h1>Updates details</h1>
      </div>
      <div id='ih5'>
        <input type='text' placeholder="Jira Service"/>
        <button id='btn'>Search</button>
      </div>
      <div id='tb'>
        <table className='incident-table'>
          <thead>
            <tr>
            <th>Date posted</th>
            <th>Description</th>
            
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jun 14, 2024, 16:25 UTC</td>
              <td>Major changes in Jira Meetings</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UPdate
