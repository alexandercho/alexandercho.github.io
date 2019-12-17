import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

function getMonthsSince(time) {
  var msToMo = 1000*60*60*24*30;
  var diff = Date.now() - time.getTime()
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

  const imageStyle = {
    display: 'block',
    margin: '0 auto',
    borderRadius: '1vw',
    backgroundColor: 'white',
    width: '10vw',
    maxWidth: 'none'
  };
  const figureStyle = {
    width: "100%",
    margin: '0 auto',
    display: 'inline-block'
  };
  const colStyle = {
    margin: '0 1vw'
  };
  const yearStyle= {
    color: 'white',
    textAlign: "center",
    margin: '0 auto',
    fontSize: '2vw'
  };
  const rowStyle = {
    margin: '3vw 0px',
    padding: '0 1vw'
  };
  const yearPos = {
    margin: 'auto 0'
  }
  var timeSpent = getMonthsSince(lang['startDate']);
  var timeStr = timeToString(timeSpent);

  return (
    <Row style={rowStyle} className="justify-content-center">
      <Col style={colStyle} xs={6} sm={6} md={6} lg={6}>
        <Figure style={figureStyle}>
          <Figure.Image
          alt={lang['name']}
          src={path}
          style={imageStyle}
          />
        </Figure>
      </Col>
      <Col style={yearPos} xs={4} sm={4} md={4} lg={4}>
        <h2 style={yearStyle}>{timeStr}</h2>
      </Col>
    </Row>);
}

function stackColumn(stack) {
  var stackName = stack['name']
  var languages = stack['languages']
  const colStyle = {
    padding:'1vw 2vw'
  };
  const headerStyle = {
    color: 'white',
    fontSize: '5vw',
    textAlign: 'center',
    margin: '0px auto',
    height: '4vw'
  };
  return (
    <Col style={colStyle} xs={6} sm={6} md={4} lg={4}>
      <Row>
        <h2 style={headerStyle}>{stackName}</h2>
      </Row>
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
    <Container fluid>
      <Row><h1 style={{margin: '0px auto'}}>Skillsets</h1></Row>
      <Row style={{marginTop: '1vw'}}>
        {stacks.map(stack => stackColumn(stack))}
      </Row>
    </Container>
  );
}

export default Skillsets;
