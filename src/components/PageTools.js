import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

function pageLogo(name) {

  const path = "/images/skillsets/"+name.toLowerCase().replace(/\s/g,'')+".png";
  const figureStyle = {
    margin: '0 auto',
    display: 'block'
  };
  const imageStyle = {
    display: 'block',
    margin: '0 auto',
    width: '10vw',
    height: '10vw',
    backgroundColor:'white',
    borderRadius:'1vw',
    padding: '5px'
  };
  const colStyle = {
    padding: '0'
  };
  return (
    <Col style={colStyle}>
      <Figure style={figureStyle}>
        <Figure.Image
          alt={name}
          src={path}
          style={imageStyle}
        />
      </Figure>
    </Col>
  );
}

function PageTools() {
  const headerStyle = {
    textAlign: "center",
    fontSize: '5vw',
    height: '7vw',
    color: 'white'
  };
  const madeWithStyle = {
    margin: '0 auto'
  };
  const madeWith = ['HTML','CSS','Javascript','React','React Bootstrap'];
  return (
    <Container fluid style={{padding: '5vw'}}id='pageTools'>
      <Row>
        <Col ><h1 style={headerStyle}>This Page Was Made With</h1></Col>
      </Row>
      <Row style={madeWithStyle}>
        {madeWith.map(logo => pageLogo(logo))}
      </Row>
    </Container>
  );
}

export default PageTools;
