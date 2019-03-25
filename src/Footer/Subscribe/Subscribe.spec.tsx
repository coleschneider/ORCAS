import * as React from 'react';
import Subscribe from './Subscribe';

describe('Subscribe', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Subscribe />);
    expect(wrapper).toMatchSnapshot();
  });
});
