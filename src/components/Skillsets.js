import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

function getMonthsSince(time) {
  var msToMo = 1000*60*60*24*30;
  var diff = Date.now() - time.getTime();
  return Math.round(diff/msToMo);
}

function timeToString(timeInMonths) {
  if (timeInMonths >= 24) {
    return String(Math.floor(timeInMonths/12)) + ' years';
  } else if (timeInMonths >= 12) {
    return String(Math.floor(timeInMonths/12)) + ' year';
  } else if (timeInMonths === 1){
    return String(timeInMonths) + ' month';
  }
  return String(timeInMonths) + ' months';
}

function languageFigure(lang) {
  var spaceRemoved = lang['name'].replace(/\./g,' ')
  const path = "/images/skillsets/" + spaceRemoved.toLowerCase().replace(/\s/g,'') + ".png";

  var timeSpent = getMonthsSince(lang['startDate']);
  var timeStr = timeToString(timeSpent);

  return (
    <Row id="skill" className="justify-content-center">
      <Col xs>
        <Figure>
          <Figure.Image
          alt={lang['name']}
          src={path}
          />
        </Figure>
      </Col>
      <Col xs>
        <h2>{timeStr}</h2>
      </Col>
    </Row>);
}
function stackColumn(stack) {
  var stackName = stack['name']
  var languages = stack['languages']
  return (
    <Col xs={6} sm={6} md={4} lg={4}>
      <h2 id='stackName'>{stackName}</h2>
      {languages.map(lang => languageFigure(lang))}
    </Col>
  );
}
function Skillsets() {
  var stacks = [
      {name: "Front End",
        languages: [
          {name: "HTML",
            startDate: new Date(2019, 5)},
          {name: "CSS",
            startDate: new Date(2019, 5)},
          {name: "Javascript",
            startDate: new Date(2019, 5)},
          {name: "React",
            startDate: new Date(2019, 5)}
        ]},
      {name: "Back End",
        languages: [
          {name: "Python",
          startDate: new Date(2015, 8)},
          {name: "Java",
          startDate: new Date(2014, 8)},
          {name: "NodeJS",
          startDate: new Date(2019, 5)}
        ]},
      {name: "Database",
        languages: [
          {name: "MySQL",
          startDate: new Date(2019, 5)},
          {name: "MongoDB",
          startDate: new Date(2019, 5)}
        ]},
      {name: "Cloud",
        languages: [
          {name: "AWS",
          startDate: new Date(2019, 10)},
          {name: "Heroku",
          startDate: new Date(2019, 10)}
        ]},
      {name: "General Purpose",
        languages: [
          {name: "C",
          startDate: new Date(2017, 8)},
          {name: "C++",
          startDate: new Date(2015, 3)}
        ]},
      {name: "Frameworks",
        languages: [
          {name: "Bootstrap",
          startDate: new Date(2019, 5)},
          {name: "React Bootstrap",
          startDate: new Date(2019, 5)},
          {name: "Jquery",
          startDate: new Date(2019, 5)}
        ]},
      {name: "Libraries",
        languages: [
          {name: "Jupyter",
          startDate: new Date(2016, 8)},
          {name: "NumPy",
          startDate: new Date(2016, 8)},
          {name: "TensorFlow",
          startDate: new Date(2017, 8)},
          {name: "PyTorch",
          startDate: new Date(2017, 8)}
        ]},
      {name: "Graphic Design",
        languages: [
          {name: "Illustrator",
          startDate: new Date(2015, 9)},
          {name: "Photoshop",
          startDate: new Date(2015, 9)}
        ]}
    ];
  return (
    <Container fluid id='skillsets'>
      <h1 id='skillsetsTitle'>Skillsets</h1>
      <Row>
        {stacks.map(stack => stackColumn(stack))}
      </Row>
    </Container>
  );
}

export default Skillsets;
