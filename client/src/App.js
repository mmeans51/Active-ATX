import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
import FreeAgent from './pages/FreeAgent';
import Leagues from './pages/Leagues';

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if(currentPage === 'Home') {
      return <Home />
    }
    if(currentPage === 'Leagues') {
      return <Leagues />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='App'>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* <Home /> */}
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
