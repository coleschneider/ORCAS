import * as React from 'react';
import Meet from 'Sections/Meet/ Meet';

describe('Meet', () => {
  it('should match the screenshot', () => {
    const wrapper = shallow(<Meet />);
    expect(wrapper).toMatchSnapshot();
  });
});
