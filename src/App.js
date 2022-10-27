import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Login from './components/Login';
import Navbar from './layouts/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Retake_exam from './components/dashboard/Retake_exam';

import ModuleHeader from './components/Module/ModuleHeader';
import DetailModule from './components/Module/DetailModule';

import YearList from './components/student/YearList';
import SemesterMarks from './components/student/SemesterMarks';

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
            <Route path="/re-take_exam" element={<Retake_exam/>}/>  
            <Route path="/RDN/semester/:semester/:year/:id" element={<SemesterMarks/>}/>        
                   
          {/* Route for  modules*/}
            <Route path='/module' element={<ModuleHeader/>} /> 
            <Route path='/detailModule/:id' element={<DetailModule/>} />
            
        </Routes>
      </div>
    </Router>
        </div>
  );
}