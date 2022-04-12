import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button } from 'react-bootstrap';

function Navo() {
  return (
    <div>
      <Navbar bg="charcoal" variant="dark">
        <Navbar.Brand>ActiveATX</Navbar.Brand>
      </Navbar>
      <Nav>
          <Nav.Link href="/">
            <Button variant='success'>Register a Team</Button>
          </Nav.Link>
          <Nav.Link href="/">
            <Button variant='danger'>Free Agent Registration</Button>
          </Nav.Link>
          <Nav.Link href="/">
            <Button variant='warning'>Tournament Registration</Button>
          </Nav.Link>
      </Nav>
    </div>
  );
}

export default Navo;
