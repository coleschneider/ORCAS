import * as React from 'react';
import About from './About';

describe('About', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
