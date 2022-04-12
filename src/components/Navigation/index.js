import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';

function Navigation() {
  return (
    <div>
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
      </Navbar>
    </div>
  );
}

export default Navigation;
