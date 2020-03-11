import React from 'react';
import '../App.css';

import Banner from './Banner';
import PageTools from './PageTools';
import AboutMe from './AboutMe';
import Skillsets from './Skillsets';
import Contact from './Contact';
import Projects from './Projects'

function Content() {
  const home = {
    backgroundColor: "#424242"
  };
  return (
    <div>
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

export default Content;
