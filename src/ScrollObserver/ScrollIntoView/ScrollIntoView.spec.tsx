import * as React from 'react';
import { shallow } from 'enzyme';
import ScrollIntoView from './ScrollIntoView';

describe('ScrollIntoView', () => {
  let wrapper;
  const clickSpy = jest.fn(el => el);
  const setupWrapper = (props = {}) => (wrapper = shallow(<ScrollIntoView {...props} />));
  it('sets the className to undefined if its not active', () => {
    setupWrapper({ Text: 'Testing' });
    expect(wrapper.find('li').props().className).toBeUndefined();
  });
  it('sets the className if its active', () => {
    setupWrapper({ Text: 'Testing', activeElement: 'Testing' });
    expect(wrapper.find('li').props().className).toEqual('current');
  });
  it('calls the function when clicked', () => {
    setupWrapper({ Text: 'Testing', activeElement: 'Testing', scrollIntoView: clickSpy });
    wrapper.find('li').simulate('click', 'data');
    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(clickSpy.mock.results[0].value).toBe('data');
  });
});
