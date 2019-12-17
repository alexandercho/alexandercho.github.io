import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
  const bannerStyle = {
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(/images/banner.jpg)',
    backgroundSize: 'cover',
    width: '100%',
    height: '50vw',
    marginTop: '0px',
    marginBottom: '0px'
  };
  const textPos = {
    marginLeft: '30vw',
    width: '50vw',
    position: 'relative',
    top: '5vw'
  };
  const headerStyle = {
    top: '5vw',
    color: 'white',
    fontSize: '6vw'
  }
  const parStyle = {
    color: 'white',
    fontSize: '3vw',
    width: '50vw'
  }
  return (<Jumbotron fluid style={bannerStyle}>
            <Container style={textPos}>
              <h1 style={headerStyle}>Hi,<br/>I'm Alex Cho</h1>
              <p style={parStyle}> Software Developer @ Berkeley, CA</p>
            </Container>
          </Jumbotron>
          );
}

export default Banner;
