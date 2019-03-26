import * as React from 'react';
import Logo from './Logo';

describe('Logo', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
