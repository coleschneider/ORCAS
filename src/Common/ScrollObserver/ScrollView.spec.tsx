import * as React from 'react';
import ScrollView, { withScrollView } from './ScrollView';
import { shallow, mount } from 'enzyme';

describe('ScrollView', () => {
  describe('withScrollView', () => {
    it('sets the initial props of the composed function', () => {
      const WrapperHoc = withScrollView(jest.fn());
      const wrapper = shallow(<WrapperHoc />);
      expect(wrapper.props().Text).toBe('Home');
      expect(wrapper.props().initial).toBe('Home');
    });
    it('sets initial to home when props is undefeined', () => {
      const WrapperHoc = withScrollView(jest.fn());
      const wrapper = shallow(<WrapperHoc />);
      expect(wrapper.props().Text).toBe('Home');
      expect(wrapper.props().initial).toBe('Home');
    });
  });

  describe('ScrollIntoView', () => {
    const docSpy = jest.spyOn(document, 'querySelector');
    const elSpy = jest.fn().mockImplementation(() => {
      props.activeElement = 'NEXT LINK';
    });
    const props = {
      Text: 'test',
      activeElement: 'test',
      selector: '#test',
      setActiveElement: elSpy,
    };

    it('matches the snapshot', () => {
      const wrapper = shallow(<ScrollView {...props} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should find the element and call the method with smooth', () => {
      const node = document.querySelector('#scroll-test');
      node.scrollIntoView = jest.fn();
      const wrapper = mount(<ScrollView selector="#scroll-test" />);
      wrapper.find('ScrollIntoView').simulate('click');
      expect(node.scrollIntoView.mock.calls[0][0]).toMatchObject({
        behavior: 'smooth',
      });
    });
  });
});
