import * as React from 'react';
import * as AnimatedLinks from './AnimatedLinks';

describe('AnimatedLinks', () => {
  describe('AnimatedNav', () => {
    it('should match the screenshot when the prop is open', () => {
      const wrapper = shallow(<AnimatedLinks.AnimatedNav posed="open" />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should match the screenshot when the prop is closed', () => {
      const wrapper = shallow(<AnimatedLinks.AnimatedNav posed="closed" />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Item', () => {
    it('should match the screenshot when the props is closed', () => {
      const wrapper = shallow(<AnimatedLinks.Item posed="open" />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should match the screenshot when the props is open', () => {
      const wrapper = shallow(<AnimatedLinks.Item posed="closed" />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
