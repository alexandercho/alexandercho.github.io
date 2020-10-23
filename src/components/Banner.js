import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-bootstrap/Fade';
function Banner() {
  const bannerStyle = {
    background: 'url(/images/home.jpg)',
    backgroundPosition: 'fixed',
    backgroundSize: 'cover',
    filter: 'brightness(0.7)',
    width: '100vw',
    height: '100%',
    position: 'fixed',
    zIndex: '-99',
    top: '0px'
  };

  return (<Fade appear={true} in={true} >
            <Jumbotron id='banner' style={bannerStyle} >

            </Jumbotron>

          </Fade>
          );
}

export default Banner;
