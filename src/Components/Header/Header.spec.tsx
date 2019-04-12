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
  it('registers the event listener on mount', () => {
    const windowSpy = jest.spyOn(window, 'addEventListener');
    const wrapper = mount(<Header />);
    expect(windowSpy).toBeCalled();
  });
  it('unregister the event listener on unmount', () => {
    const windowSpy = jest.spyOn(window, 'removeEventListener');
    const wrapper = mount(<Header />);
    wrapper.unmount();
    expect(windowSpy).toBeCalled();
  });
  it('calls setHeaderScroll as it scrolls', () => {
    const setHeaderScroll = jest.fn(isHome => isHome);
    const wrapper = shallow(<Header setHeaderScroll={setHeaderScroll} />);
    wrapper.instance().handleSetActive('home');
    expect(setHeaderScroll).toBeCalledWith(false);
  });
  it('calls setHeaderScroll as it scrolls with false', () => {
    const setHeaderScroll = jest.fn(isHome => isHome);
    const wrapper = shallow(<Header setHeaderScroll={setHeaderScroll} />);
    wrapper.instance().handleSetActive('mission');
    expect(setHeaderScroll).toBeCalledWith(true);
  });
  it('sets state of isDropdown', () => {
    const wrapper = shallow(<Header />);
    wrapper.instance().toggleDropdown();
    expect(wrapper.state().isDropdown).toBe(true);
  });
});
