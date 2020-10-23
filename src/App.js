import React from 'react';
import './App.css';

import ResponsiveNavbar from './components/ResponsiveNavbar';
import Banner from './components/Banner';
import PageTools from './components/PageTools';
import AboutMe from './components/AboutMe';
import Skillsets from './components/Skillsets';
import Contact from './components/Contact';
import Projects from './components/Projects';
import BannerText from './components/BannerText';
import Container from 'react-bootstrap/Container';

function App() {

  return (
      <div>
        {ResponsiveNavbar()}
        {Banner()}
        {BannerText()}
        <div id='content'>
          {AboutMe()}
          {Skillsets()}
          {Projects()}
          {PageTools()}

        </div>
        {Contact()}
      </div>);
}

export default App;
