import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import banner from './banner.jpg';

function jumbo() {
  const bannerStyle = {
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(' + banner + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: "50vw",
    width: "110vw"
  };
  const textPos = {
    position: 'relative',
    left: '25vw',
    top: '0vw'
  };
  const headerStyle = {
    color: 'white',
    fontSize: '5vw'
  }
  const parStyle = {
    color: 'white',
    fontSize: '3vw',
    width: '50vw'
  }
  return (<Jumbotron fluid style={bannerStyle}>
            <Container style={textPos}>
              <h1 style={headerStyle}>Hi there,</h1>
              <h1 style={headerStyle}>my name is Alex</h1>
              <p style={parStyle}>
                Welcome to my personal website where you can learn what I've
                done, what I'm doing, and what I plan to do in the future.
              </p>
            </Container>
          </Jumbotron>
          );
}

function navbar() {
  return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><img
                alt=""
                src="/tabIcon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#about">Skillsets</Nav.Link>
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

function App() {
  return (
      <div>
        {navbar()}
        {jumbo()}
      </div>)
}

export default App;
