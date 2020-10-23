import React from 'react';
import Container from 'react-bootstrap/Container';

import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ReactDOM from 'react-dom';

function AboutMe() {
  /*Break into subcategories:
  Education, Skillsets, Work*/
  const containerStyle = {
    marginTop: '0vw'

  };

  const hStyle = {
    textAlign: 'center',
    fontSize: '5vw'
  };

  const pStyle = {
    textAlign: 'center',
    fontSize: '2vw',
    padding: '0 5vw'
  };

  return (
    <Container fluid style={containerStyle} fluid id="about" >
        <Row>
          <Col style={{textAlign: "center"}}>
            <h1 style={hStyle}>About Me</h1>
            <p style={pStyle}>
              Welcome to my personal website where you can learn what I've done,
              what I'm doing, and what I plan to do in the future. I am
              a recent graduate from UC Berkeley searching for full-time work as a software
              engineer.
            </p>
            <Button variant="dark" size="lg"> <h2>More About Me</h2></Button>
          </Col>
          <Col>
            <img src='images/centered.jpg' id='profile'></img>
          </Col>
        </Row>

      </Container>
    );
}

export default AboutMe;
