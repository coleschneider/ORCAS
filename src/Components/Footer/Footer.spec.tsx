import * as React from 'react';
import Footer from './Footer';

describe('Footer', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
