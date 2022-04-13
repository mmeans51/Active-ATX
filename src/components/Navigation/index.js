import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import logo from '../../assets/images/Logo2.png'

function Navigation() {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={logo} alt="volleball"></img>
            <p>League Dates - March 21-27 Week 1 to May 8-15 Week 8</p>
            <p>CTX Feildhouse Buda Tx Sand Volleyball Courts</p>
          </div>
        </div>
      </div>
      <Navbar bg="charcoal" variant="dark" expand="sm" collapseOnSelect>
        <Navbar.Brand>ActiveATX</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="">
              <Button variant="success">Register a Team</Button>
            </Nav.Link>
            <Nav.Link href="">
              <Button variant="danger">Free Agent Registration</Button>
            </Nav.Link>
            <Nav.Link href="">
              <Button variant="warning">Tournament Registration</Button>
            </Nav.Link>
            <NavDropdown>
              <NavDropdown.Item href="/">Home</NavDropdown.Item> 
              <NavDropdown.Item href="/">Leagues</NavDropdown.Item>
              <NavDropdown.Item href="/">Tournament</NavDropdown.Item>
              <NavDropdown.Item href="/">Open Play</NavDropdown.Item>
              <NavDropdown.Item href="/">Standing</NavDropdown.Item>
              <NavDropdown.Item href="/">Schedule/ Calendar</NavDropdown.Item>
              <NavDropdown.Item href="/">Rules</NavDropdown.Item>
              <NavDropdown.Item href="/">Facility</NavDropdown.Item>
              <NavDropdown.Item href="/">Sponsorship</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* </Navbar.Toggle> */}
      </Navbar>
    </div>
  );
}

export default Navigation;
