import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/Logo2.png';

function Navigation() {
  return (
    <div className='Nav'>
      <div className="jumbotron">
        <div>
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
          <a href='/'>Home</a>
          <a href='/'>Leagues</a>
          <a href='/'>Tournament</a>
          <a href='/'>Schedule</a>
          <a href='/'>Rules</a>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
