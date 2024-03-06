import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const SecondMenu = () => (
  <Nav className="justify-content-md-center py-3">
    <NavDropdown title="MEN" />
    <NavDropdown title="WOMEN" />
    <NavDropdown title="KIDS" />
    <NavDropdown title="BRANDS" />
    <Nav.Link>SEARCH</Nav.Link>
  </Nav>
);

export default SecondMenu;
