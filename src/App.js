import React from 'react';
import Home from './Home';
import './App.css';
import Footer from './Footer';
import Section3 from './Section3';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Incident from './Incident';
import Maintainance from './Maintainance';
import UPdate from './UPdate';
import Calendar from './Calendar';
import QuestionList from './Faq';
const App = () => {
  return (
    <BrowserRouter>
      <Home/>
      <Section3/>
      
    <Routes>
      <Route path='/incidenthistory' element={<Incident/>}/>
      <Route path='/Maintenance' element={<Maintainance/>}/>
      <Route path='/updates' element={<UPdate/>}/>
      <Route path='/Calendar' element={<Calendar/>}/>
      <Route path='/Faq' element={<QuestionList/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App
