import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactDOM from 'react-dom';
import App from '../App';
import Content from './Content';

function projectLink(name) {
  const path = "/images/contact/"+name.toLowerCase().replace(/\s/g,'')+".png";
  return (
    <a href={'#'+name} style={{margin: '0px 2vw'}}>
      <img src={path} style={{width:'8vw'}} alt={name}/>
    </a>
  );
}

function ResponsiveNavbar() {
  var home = () => {
    ReactDOM.render(<Content />, document.getElementById('main'));
    document.getElementById('responsive-navbar-nav').hide();
    window.scrollTo(0,0);
  }
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
                <Nav.Link onClick={home}>Home</Nav.Link>
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
