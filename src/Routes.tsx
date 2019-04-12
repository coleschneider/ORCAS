import * as React from 'react';

import CaseStatement from 'Images/case_statement.png';
import Brochure_One from 'Images/brochure_one.png';
import Brochure_Two from 'Images/brochure_two.png';
import Building_Plans from 'Images/building_plans.jpg';
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
// <Carousel paginationStyle={{ background: 'grey' }} arrowStyle={{ color: 'white' }}>

type RouteImages = 'brochure' | 'building_plans' | 'case_statement';

type ModalImage = { [K in RouteImages]: string[] };

const images: ModalImage = {
  brochure: [Brochure_One, Brochure_Two],
  building_plans: [Building_Plans],
  case_statement: [CaseStatement],
};

const MediaPaths = [
  {
    Component: VideoPlayer,
    path: '/video',
  },
  {
    Component: ({ match }) => (
      <Carousel paginationStyle={{ background: 'grey' }} slideStyles={{ marginTop: 0 }} arrowStyle={{ color: 'white' }}>
        {images[match.params.id].map((image, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
            <img style={{ width: '80%', height: '100%' }} src={image} />
          </div>
        ))}
      </Carousel>
    ),
    path: '/img/:id(brochure|case_statement|building_plans)',
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
