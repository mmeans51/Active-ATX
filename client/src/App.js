import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import FreeAgent from './pages/FreeAgent';
import Leagues from './pages/Leagues';
import Tournament from './pages/Tournament';
import Schedule from './pages/Schedule';
import Rules from './pages/Rules';
import OpenPlay from './pages/OpenPlay';
import Signup from './pages/Signup';
import Contact from './pages/Contact'
import Login from './pages/Login';

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if(currentPage === 'Home') {
      return <Home />
    }
    if(currentPage === 'Leagues') {
      return <Leagues />
    }
    if(currentPage === 'Tournament') {
      return <Tournament />
    }
    if(currentPage === 'Schedule') {
      return <Schedule />
    }
    if(currentPage === 'Rules') {
      return <Rules />
    }
    if(currentPage === 'FreeAgent') {
      return <FreeAgent />
    }
    if(currentPage === 'OpenPlay') {
      return <OpenPlay />
    }
    if(currentPage === 'Contact') {
      return <Contact />
    }
    if(currentPage === 'Login') {
      return <Login />
    }
    return <Signup />
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='App'>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <Home /> */}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
