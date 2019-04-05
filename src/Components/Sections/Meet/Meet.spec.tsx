import * as React from 'react';
import { MeetTheSeniors, MeetTheTeam } from 'Sections/Meet/Meet';

describe('Meet', () => {
  describe('MeetTheTeam', () => {
    it('should match the screenshot', () => {
      const wrapper = shallow(<MeetTheTeam />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('MeetTheSeniors', () => {
    it('should match the screenshot', () => {
      const wrapper = shallow(<MeetTheSeniors />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
