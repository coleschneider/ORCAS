import * as React from 'react';
import * as sectionUtils from '../sectionUtils'


describe('utils', () => {
  describe('sectionUtils', () => {
    it('should create a wrapper for the section', () => {
      const SectionFactory = sectionUtils.createSection({
        displayTitle: 'test-title',
        sectionName: 'test',
      })
      const wrapper  = shallow(<SectionFactory />);
      expect(wrapper.find('section').props().id).toBe('test')
      expect(wrapper.find('.display-1').text()).toBe('test-title')
    })
  })
})