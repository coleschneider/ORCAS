import * as React from 'react';
import Donate from './Donate';

describe('Donate', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Donate />);
    expect(wrapper).toMatchSnapshot();
  });
});
