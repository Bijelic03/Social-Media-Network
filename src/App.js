import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import { LandingPage } from './pages/homePage';
import { NavBar } from './components/navBarComponent';
function App() {
  return (
  <>
  
<NavBar></NavBar>

  <Routes>
    
  <Route path="/" element={<LandingPage  />} />
  
   </Routes>
   </>   
  );
}

export default App;
