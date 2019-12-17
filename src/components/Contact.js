import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from'react-bootstrap/Navbar';

function contactLink(name, link) {
  const path = "/images/contact/"+name.toLowerCase().replace(/\s/g,'')+".png";
  return (
    <a href={link} style={{margin: '0px 3vw'}}>
      <img src={path} style={{width:'5vw'}} alt={name}/>
    </a>
  );
}
function Contact() {
  var contactStyle = {
    marginTop: '0px',
    height: "20vw !important"
  }
  var contacts = [{name: 'gmail', link: 'mailto:alexandercho@berkeley.edu'},
    {name: 'linkedin', link: 'https://www.linkedin.com/in/alexscho/'},
    {name: 'resume', link: '/alexander_cho_resume.pdf'}]
  return (
    <Navbar style={contactStyle} bg="dark" variant="dark" sticky="bottom" id="contact">
      <Col>
        <Row><h3 style={{margin: '0px auto', height: '8vw'}}>Contact</h3></Row>
        <Row><div style={{margin: '0px auto', height: '10vw'}}>{contacts.map(c => contactLink(c.name, c.link))}</div></Row>
      </Col>
    </Navbar>
    );
}

export default Contact;
