import * as React from 'react';
import './about.scss';
import Slide from 'react-reveal/Slide';

import { createSection } from 'utils/sectionUtils';
import Video from 'Components/Video/Video';
const processes = [
  {
    body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam`,
    header: 'An Emphasis on Community',
    left: true,
  },
  {
    body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam`,
    header: 'An Emphasis on Community',
    right: true,
  },
  {
    body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam`,
    header: 'As a group',
    left: true,
  },
  {
    body: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
    explicabo.`,
    header: 'With our Mission',
    right: true,
  },
];
const Step = ({ header, body, ...rest }) => (
  <Slide {...rest}>
    <div className="col-block step">
      <h3 className="item-title">{header}</h3>
      <p>{body}</p>
    </div>
  </Slide>
);

const AboutWrapper = createSection({
  className: 'about-how',
  displayTitle: 'How will we achieve?',
  sectionName: 'about',
});
function About() {
  return (
    <AboutWrapper>
      <Video />
      <div className="row process-wrap">
        <div className="process">
          <div className="process__steps block-1-2 block-tab-full group">
            {processes.map((process, index) => {
              return <Step key={index} {...process} />;
            })}
          </div>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
