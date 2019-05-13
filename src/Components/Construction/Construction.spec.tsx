import * as React from 'react';
import Construction from './Construction';

describe('Construction Modal', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Construction />);
    expect(wrapper).toMatchSnapshot();
  });
});
