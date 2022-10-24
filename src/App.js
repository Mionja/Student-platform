import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Login from './components/Login';
import Navbar from './layouts/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Graphs from './components/dashboard/Graphs';

import ModuleHeader from './components/modules/ModuleHeader';
import DetailModule from './components/modules/DetailModule';

import YearList from './components/student/YearList';

export default function App() {
  if (! JSON.parse(localStorage.getItem('id'))) {
    return (
      <>
        <Router>
          <Routes>
              <Route path="/" element={<Login/>}/> 
          </Routes>
        </Router>
      </>
    )
  }

  return (
    
    <div>
    <Navbar/>
    <Router>
      <div>
        <Routes>
          {/* Route for students and marks*/}
            <Route path="/dashboard" element={<Dashboard/>}/> 
            <Route path="/mark" element={<YearList/>}/>  
            <Route path="/re-take_exam" element={<Graphs/>}/>     
                   
          {/* Route for  modules*/}
            <Route path='/module' element={<ModuleHeader/>} />
            <Route path='/detailModule/:id' element={<DetailModule/>} /> 
            /re-take_exam
        </Routes>
      </div>
    </Router>
        </div>
  );
}