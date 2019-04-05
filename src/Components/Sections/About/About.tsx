import * as React from 'react';
import './about.scss';
import Slide from 'react-reveal/Slide';
import * as CaseStatement from 'Images/case_statement.png';
import { createSection } from 'utils/sectionUtils';
import Video from './Video/Video';
import ModalButton from 'Common/ModalButton/ModalButton';
const processes = [
  {
    body: `ORCAS is a newly established nonprofit organization based in Oxnard, California`,
    header: 'Background',
    left: true,
  },
  {
    body: `ORCAS was formed to address the aging individuals within the community who are seeking access to a newer and safer community senior center.`,
    header: 'Purpose',
    right: true,
  },
  {
    body: `After establishing a relationship with the senior members of the surrounding communities and understanding the concerns associated with the existing facilities, ORCAS gathered experienced members of the community from a variety of occupational backgrounds to address the growing concern.`,
    header: 'Relationships',
    left: true,
  },
  {
    body: `ORCAS’ goal is to create a new senior facility that can meet the standard of the deserving seniors of the surrounding areas.`,
    header: 'Goal and Community',
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
const images = [{ id: 0, title: 'Case Statement' }, { id: 1, title: 'Brochure' }];
const AboutWrapper = createSection({
  className: 'about-how',
  displayTitle: 'About',
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
      <div className="media-btn-container">
        <div className="btn-wrap">
          <ModalButton text="Case Statement" imageId="case_statement" />
        </div>
        <div className="spacer" />
        <div className="btn-wrap">
          <ModalButton text="Brochure" style={{ background: '#80d3d2' }} imageId="brochure" />
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
