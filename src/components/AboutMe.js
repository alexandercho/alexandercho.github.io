import React from 'react';
import Container from 'react-bootstrap/Container';


function AboutMe() {
  const containerStyle = {
    padding: '0px 5vw',
    margin: '3vw 0px'
  };
  const hStyle = {
    textAlign: 'center',
    fontSize: '5vw',
    color: 'white'
  };
  const pStyle = {
    textAlign: 'center',
    fontSize: '3vw',
    color: 'white'
  };
  return (
    <Container style={containerStyle} fluid id="about">
      <h1 style={hStyle}>About Me</h1>
      <p style={pStyle}>
        Welcome to my personal website where you can learn what I've done,
        what I'm doing, and what I plan to do in the future. I currently am
        a recent graduate from UC Berkeley working as a tech consultant and
        software developer for the UC Berkeley SCET. I am also currently
        searching for full-time work so feel free
        to download my resume reach out to me.
      </p>
    </Container>
    );
}

export default AboutMe;
