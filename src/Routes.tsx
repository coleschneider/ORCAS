import * as React from 'react';

import About from 'Sections/About/About';
import Contact from 'Sections/Contact/Contact';
import Donate from 'Sections/Donate/Donate';
import Landing from 'Sections/Landing/Landing';
import Mission from 'Sections/Mission/Mission';
import Services from 'Sections/Services/Services';
import Meet from 'Components/Sections/Meet/ Meet';
import { Link } from 'react-router-dom';
const Video = () => (
  
  <div className="col-full video-bg">
    <div className="shadow-overlay" />
    <Link
      to={{
        pathname: '/path',
        state: {
          modal: true,
        },
      }}
      className="btn-video"
      // href="https://player.vimeo.com/video/223376401?color=00a650&title=0&byline=0&portrait=0"
    >
      <span className="video-icon" />
    </Link>
    <div className="stats">
      <div className="item-stats">
        <span className="item-stats__num">Oxnard</span>
        <span className="item-stats__title">A brief description of oxnard video</span>
      </div>
      <div className="item-stats">
        <span className="item-stats__num">24K</span>
        <span className="item-stats__title">Views</span>
      </div>
    </div>
  </div>

)
const Routes = () => (
  <React.Fragment>
    <Landing />
    <Mission />
    <Video />
    <About />
    <Services />
    <Meet />
    <Donate />
    <Contact />
  </React.Fragment>
);

export default Routes;
