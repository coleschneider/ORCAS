import * as React from 'react';
import Services from './Services';

describe('Services', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Services />);
    expect(wrapper).toMatchSnapshot();
  });
});
