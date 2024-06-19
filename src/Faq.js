// QuestionList.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './App.css';  // Import the CSS file

// Define an array of questions and answers
const questions = [
  {
    question: "How to subscribe to the RSS feed for incidents from the Jira service status page?",
    answer: "The Jira Service Status page has been enhanced to incorporate an RSS feed for both incidents and each specific service. Users have the flexibility to opt for their preferred RSS reader and subscribe accordingly.<br/>To find the RSS Feed for incidents, simply click on the icon with the User-added image located at the top right of the Status page. For accessing the RSS Feed dedicated to each individual service, click on the User-added image icon positioned next to the respective service(s). Jira App users are advised to utilize the RSS bot, which delivers a message for every update."
  },
  {
    question: "How do I subscribe to the RSS feed for current releases and announcements from status.Jira.com/maintenance?",
    answer: "The Jira Service Status page has been improved to include an RSS feed for the latest releases and announcements available. To access the RSS Feed for current releases and announcements, click on the icon with the User-added image at the top right , as applicable.<br/>For Jira App users, it is recommended to make use of the RSS bot, which sends a message for each update. Additionally, users can choose their preferred RSS reader and subscribe accordingly, providing them with flexibility in staying informed."
  },
  {
    question: "How to contact Cisco technical assistance center (TAC)?",
    answer: "Getting in touch with technical support for your Jira concerns is a straightforward process! The initial step involves determining the appropriate channel for submitting your support issue. Your company might mandate submitting a case through your internal support desk, a partner reseller, or directly through Jira.<br/>To locate your Jira site support information, follow these steps (when logged out of your Jira site):<br/>Access your Jira site.<br/>Click the menu toggle button.<br/>Select 'Support.'<br/>Explore various support options on our Help Center support page, including options to initiate an online case or connect with us via telephone."
  }
];

const QuestionList = () => {
  const [visibleAnswers, setVisibleAnswers] = useState([]);

  const toggleAnswerVisibility = (index) => {
    if (visibleAnswers.includes(index)) {
      setVisibleAnswers(visibleAnswers.filter(i => i !== index));
    } else {
      setVisibleAnswers([...visibleAnswers, index]);
    }
  };

  return (
    <div id='i5'>
      <div id='ih1'>
        <div id='ih2'>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div id='ih3'>
          <p>Find more help and resources.</p>
        </div>
      </div>
      <div id='ih10'>
          {questions.map((q, index) => (
            <div className='question-container' key={index}>
              <div id='i1'>
                <p>{q.question}</p>
                {visibleAnswers.includes(index) && (
                  <p dangerouslySetInnerHTML={{ __html: q.answer }}></p>
                )}
              </div>
              <div id='i2'>
                <button id='btn5' onClick={() => toggleAnswerVisibility(index)}>
                  <FontAwesomeIcon icon={visibleAnswers.includes(index) ? faMinus : faPlus} />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default QuestionList;
