import * as React from 'react';
import Header from './Header';

describe('Header', () => {
  

  const observe = jest.fn();
  let wrapper;

  it('renders with the navigation closed', () => {
    wrapper = shallow(<Header />);
    const PosedComponent = wrapper.find('nav');
    expect(PosedComponent.props().pose).toBe('closed');
  });
  it('renders with the navigation closed on mobile', () => {
    wrapper = mount(<Header />);
    wrapper.setState({ isMobile: true });
    wrapper.update();
    expect(wrapper.find('.is-open').exists()).toBe(false);
    wrapper
      .find('Toggle')
      .props()
      .onClick();
    wrapper.update();
    expect(wrapper.find('.is-open')).toBeDefined();
  });
  it('sets the dropdown state', () => {
    
  })
});
