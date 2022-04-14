import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/Logo2.png';

function Navigation() {
  return (
    <div>
      <div className="navContainer">
        <div className="logoContainer">
          <div className='nav-img'>
            <img src={logo} alt="volleyball"></img>
          </div>
          <div className='nav-p'>
            <p>League Dates - March 21-27 Week 1 to May 8-15 Week 8</p>
            <p>CTX Feildhouse Buda Tx Sand Volleyball Courts</p>
          </div>
        </div>
      </div>
      <Navbar bg="charcoal" variant="dark" expand="sm" collapseOnSelect>
        
 
      </Navbar>
    </div>
  );
}

export default Navigation;
