import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/Logo2.png';

function Nav({ currentPage, handlePageChange }) {
  
//  function handleClick(e) {
//    e.preventDefault();
//   console.log('Homepage')
//  }

  return (

    <div className='Nav'>
      <div className="jumbotron">
        <div className='jumbotronInner'>
          <div>
            <img className='logo' src={logo} width="150" alt='volleyball'></img>
          </div>
          <div className='nav-p'>
            <p>League Dates - March 21-27 Week 1 to May 8-15 Week 8</p>
            <p>CTX Feildhouse Buda Tx Sand Volleyball Courts</p>
          </div>
        </div>
      </div>
      <div className='linkContainer'>
        <div className='navlinks'>
        <ul>
          <li>
            <a href='#home' onClick={() => handlePageChange('Home')}>Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#leagues' onClick={() => handlePageChange('Leagues')}>Leagues</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#tournament' onClick={() => handlePageChange('Tournament')}>Tournament</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#schedule' onClick={() => handlePageChange('Schedule')}>Schedule</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#rules' onClick={() => handlePageChange('Rules')}>Rules</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#freeAgent' onClick={() => handlePageChange('FreeAgent')}>Free Agent Registration</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#open-play' onClick={() => handlePageChange('OpenPlay')}>Open Play</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#sign-up' onClick={() => handlePageChange('Signup')}>Sign-up</a>
          </li>
        </ul>
        </div>
      </div>
    </div>

  );
}

export default Nav;
