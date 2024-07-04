import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import CompanyInfo from './components/CompanyInfo';
import Comingsoon from './components/Comingsoon';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/company-info" element={<CompanyInfo />} />
        <Route path="/comingsoon" element={<Comingsoon />} />
      </Routes>
    </Router>
  );
};

export default App;
