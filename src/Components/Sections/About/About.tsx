import * as React from 'react';
import './about.scss';
import Slide from 'react-reveal/Slide';

import { createSection } from 'utils/sectionUtils';
const processes = [
  {
    header: 'An Emphasis on Community',
    body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo.`,
    left: true
  },
  {
    header: 'An Emphasis on Community',
    body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo.`,
    right: true
  },
  {
    header: 'As a group',
    body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo.`,
    left: true
  },
  {
    header: 'With our Mission',
    body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo.`,
    right: true
  }
]
const Step = ({ header, body, ...rest }) => (
  <Slide {...rest}>
    <div className="col-block step">
      <h3 className="item-title">{header}</h3>
      <p>{body}</p>
    </div>
  </Slide>
);

const AboutWrapper = createSection({
  displayTitle: 'How will we achieve?',
  sectionName: 'about',
  className: 'about-how'
})
function About() {
  return (
    <AboutWrapper>
      <div className="row process-wrap">
        <div className="process">
          <div className="process__steps block-1-2 block-tab-full group">
              {processes.map((process, index) => {
                return (
                <Step key={index} {...process} />
              )})}
          </div>
        </div>
      </div>
      </AboutWrapper>
  );
}

export default About;
