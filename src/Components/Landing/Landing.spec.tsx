import * as React from 'react';
import Landing from './Landing';

describe('Landing', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper).toMatchSnapshot();
  });
});
