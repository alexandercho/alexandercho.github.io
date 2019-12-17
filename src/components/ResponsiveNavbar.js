import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ResponsiveNavbar() {
  return (<Navbar
            collapseOnSelect variant='dark' bg='dark' expand="lg" fixed="top">
            <Navbar.Brand href="#home"><img
                alt=""
                src="images/tabIcon.png"
                width="30px"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"
              />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto">
                <Nav.Link href="#home" >Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skillsets">Skillsets</Nav.Link>
                <NavDropdown title="Projects" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>);
}
export default ResponsiveNavbar;
