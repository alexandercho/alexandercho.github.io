import React from 'react';
import './App.css';

import Banner from './components/Banner';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import PageTools from './components/PageTools';
import AboutMe from './components/AboutMe';
import Skillsets from './components/Skillsets';
import Contact from './components/Contact';
import Projects from './components/Projects'






function App() {
  const home = {
    backgroundColor: "#424242"
  };
  return (
      <div id="home" style={home}>
        {ResponsiveNavbar()}
        {Banner()}
        <div style={{padding:'0 10vw'}}>
          {AboutMe()}
          {Skillsets()}
          {Projects()}
          {PageTools()}
        </div>

        {Contact()}
      </div>);
}

export default App;
