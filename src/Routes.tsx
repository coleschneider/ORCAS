import * as React from 'react';

import * as CaseStatement from 'Images/case_statement.png';
import * as Brochure_One from 'Images/brochure_one.png';
import * as Brochure_Two from 'Images/brochure_two.png';
import About from 'Sections/About/About';
import Contact from 'Sections/Contact/Contact';
import Donate from 'Sections/Donate/Donate';
import Landing from 'Sections/Landing/Landing';
import LazyRoute from 'Common/LazyRoute/LazyRoute';
import Mission from 'Sections/Mission/Mission';
import { MeetTheSeniors, MeetTheTeam } from 'Components/Sections/Meet/Meet';
import Services from 'Sections/Services/Services';
import VideoPlayer from 'Components/VideoPlayer/VideoPlayer';
import Carousel from 'Components/Carousel/Carousel';
const ImageViewer = ({ match }) => (
  <Carousel paginationStyle={{background: 'grey'}} arrowStyle={{color: 'white', }}>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <img style={{width: '80%', height: '100%'}} src={Brochure_Two}/>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <img style={{width: '80%', height: '100%'}} src={Brochure_One}/>
    </div>
  </Carousel>
)
const images = {
  brochure: CaseStatement,
  case_statement: CaseStatement,
};

const MediaPaths = [
  {
    Component: VideoPlayer,
    path: '/video',
  },
  {
    Component: ImageViewer,
    path: '/img/:id',
  },
];

export const Routes = () => (
  <React.Fragment>
    <Landing />
    <Mission />
    <About />
    <Services />
    <MeetTheTeam />
    <MeetTheSeniors />
    <Donate />
    <Contact />
  </React.Fragment>
);

export const ModalRoutes = MediaPaths.map(({ Component, path }) => (
  <LazyRoute key={path} path={path} component={Component} />
));
