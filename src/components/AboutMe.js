import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ReactDOM from 'react-dom';
import MoreAboutMe from '../MoreAboutMe';

function AboutMe() {
  const containerStyle = {
    padding: '0px 5vw',
    margin: '3vw auto'
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

  var mam = () => {
    ReactDOM.render(<MoreAboutMe/>, document.getElementById('main'));
  }


  return (
    <Container style={containerStyle} fluid id="about">
      <h1 style={hStyle}>About Me</h1>
      <p style={pStyle}>
        Welcome to my personal website where you can learn what I've done,
        what I'm doing, and what I plan to do in the future. I currently am
        a recent graduate from UC Berkeley recently finished with a contract job
        as a tech consultant and software developer for the UC Berkeley SCET. I
        am also currently
        searching for full-time work so feel free
        to download my resume reach out to me.
      </p>
      <Col col-md-4 col-lg-2>
        <Row>
          <Button text-center
          size='md'
          variant="light"
          id="moreAbout"
          onClick={mam}
          >
            More About Me
          </Button>
        </Row>
      </Col>
    </Container>
    );
}

export default AboutMe;
