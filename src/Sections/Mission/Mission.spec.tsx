import * as React from 'react';
import Mission from './Mission';

describe('Mission', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Mission />);
    expect(wrapper).toMatchSnapshot();
  });
});
