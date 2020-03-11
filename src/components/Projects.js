import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function Project(name, description) {
  var filePath = "/images/projects/" + name.toLowerCase().replace(/\s/g,'') + ".png"
  return (
    <Carousel.Item>
      <img
        style={{width:'100%', height:'auto', filter: 'brightness(0.5)',borderRadius:'5vw'}}
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
function Projects() {
  const projList = [
    {name: "Park Smart",
    description: "This application uses live car data and machine learning to predict parking availability in Colombus, Ohio"}
  ]
  return (
    <Container fluid>
      <h1 style={{textAlign: 'center'}}>Projects</h1>
      <Carousel fade className='w-75' style={{margin: '0 auto'}}>
        {projList.map(proj => Project(proj.name, proj.description))}
      </Carousel>
    </Container>
    );
}

export default Projects;
