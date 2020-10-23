import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from 'react-dom';

function ResponsiveNavbar() {
  return (<Navbar variant='dark' collapseOnSelect expand="sm" id='navbar' style={{background:'transparent', zIndex:'99'}}>
            <Navbar.Brand href="#home"><img
                alt=""
                src="images/whiteLogo.png"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle className='align-top' aria-controls="responsive-navbar-nav" style={{ fontSize:'1.5em'}}/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skillsets">Skillsets</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="/resume.pdf">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>);
}
export default ResponsiveNavbar;
