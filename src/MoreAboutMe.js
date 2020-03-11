import React from 'react';
import './App.css';

import Banner from './components/Banner';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import PageTools from './components/PageTools';
import AboutMe from './components/AboutMe';
import Skillsets from './components/Skillsets';
import Contact from './components/Contact';
import Projects from './components/Projects'
import Button from 'react-bootstrap/Button';
import App from './App';
import ReactDOM from 'react-dom';
import Content from './components/Content';
function MoreAboutMe() {
  const home = {
    backgroundColor: "#424242"
  };
  var goBack = () => {
    ReactDOM.render(<Content />, document.getElementById('main'));
  }
  return (
      <div id="moreAboutMe" style={home}>
        <div style={{padding:'5vw 10vw', textAlign:'center'}}>
        <h1>More About Me</h1>
          <h2>Coding Profiles</h2>

          <h2>Social Media</h2>

        </div>
        <Button text-center
        size='lg'
        variant="light"
        id="goback"
        onClick={goBack}
        >
          Go Back
        </Button>
      </div>

      );
}

export default MoreAboutMe;
