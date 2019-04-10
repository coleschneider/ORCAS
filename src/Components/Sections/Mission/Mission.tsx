import * as React from 'react';
import { createSection } from 'utils/sectionUtils';
import Reveal from 'react-reveal';

import './mission.scss';

const MissionWrap = createSection({
  description: `❝     ORCAS’ mission is to generate interest and raise funds to build a state-of-the-art senior community and recreational center in Oxnard, CA.    ❞`,
  displayTitle: 'Our Mission',
  sectionName: 'mission',
});

export default () => (
  <Reveal>
    <MissionWrap
      headingStyle={{ fontSize: '7.8rem' }}
      subHeadingStyle={{ fontSize: '4rem', fontWeight: 800, color: '#121619' }}
    />
  </Reveal>
);
