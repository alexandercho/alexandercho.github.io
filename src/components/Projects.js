import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Figure from 'react-bootstrap/Figure';
//import 'bootstrap/dist/css/bootstrap.min.css';

function Project(name, description) {
  var filePath = "/images/projects/" + name.toLowerCase().replace(/\s/g,'') + ".png"
  return (
    <Carousel.Item>
      <img
        style={{width:'100%', height:'40vw', filter: 'brightness(0.5)',borderRadius:'5vw'}}
        src= {filePath}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{name}</h3>
        <p style={{fontSize: '2vw'}}>{description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}
function projectTile(name, description) {
  var filePath = "/images/projects/" + name.toLowerCase().replace(/\s/g,'') + ".png"
  return <img id='projectTile'
          alt={name}
          src={filePath}
          />
}
function Projects() {
  const projList = [
    {name: "Park Smart",
    description: "This application uses live car data and machine learning to predict parking availability in Colombus, Ohio"},
    {name: "Tic Tac Toe",
    description: "This application is a simple web-based application for the game Tic Tac Toe"},
    {name: "Tic Tac Toe",
    description: "This application is a simple web-based application for the game Tic Tac Toe"},
    {name: "Tic Tac Toe",
    description: "This application is a simple web-based application for the game Tic Tac Toe"}
  ]
  return (
    <Container fluid id = "Projects">
      <h1 id='projectsTitle'>Projects</h1>
      <div id='projTiles'>
      {projList.map(proj => projectTile(proj.name, proj.description))}
      </div>
    </Container>
    );
  return (
    <Container fluid id = "Projects">
      <h1 id='projectsTitle'>Projects</h1>
      <Carousel fade className='w-75' style={{margin: '0 auto'}}>
        {projList.map(proj => Project(proj.name, proj.description))}
      </Carousel>
    </Container>
    );
}

export default Projects;
