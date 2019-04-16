import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar className="bg-light justify-content-between">
        <Nav className="mr-auto">
          <NavLink to='/'>All Repos</NavLink>
        </Nav>
      </Navbar>
    );
  }
}

export default CustomNavbar;
