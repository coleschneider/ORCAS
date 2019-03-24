import * as React from 'react';
import './about.scss';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
const Step = ({ header, children, ...rest }) => (
  <Slide {...rest}>
    <div className="col-block step">
      <h3 className="item-title">{header}</h3>
      <p>{children}</p>
    </div>
  </Slide>
);

function About(props) {
  return (
    <section id="about" className="s-about-how target-section">
      <div className="row">
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
      </div>
      <div className="row process-wrap">
        <h2 className="display-2 text-center">How will we achieve?</h2>
        <div className="process">
          <div className="process__steps block-1-2 block-tab-full group">
            <Step header="An Emphasis on Community" left={true}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </Step>
            <Step header="An Emphasis on Community" right={true}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </Step>
            <Step header="As a Group" left={true}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </Step>
            <Step header="With our Mission" right={true}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </Step>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
