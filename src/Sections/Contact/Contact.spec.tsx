import * as React from 'react';
import Contact from './Contact';

describe('Contact', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toMatchSnapshot();
  });
});
