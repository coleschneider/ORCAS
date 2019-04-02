import * as React from 'react';
import { createSection, TeamMember } from 'utils/sectionUtils';
import './team.scss';
const TeamWrapper = createSection({
  sectionName: 'team',
  displayTitle: 'Meet the Team!',
});

export default () => (
  <TeamWrapper>
    <TeamMember name="team member 1" email="one@gmail.com" />
    <TeamMember name="team member 2" email="two@gmail.com" />
    <TeamMember name="team member 3" email="three@gmail.com" />
  </TeamWrapper>
);
