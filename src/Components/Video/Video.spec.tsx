import * as React from 'react';
import Video from './Video';

describe('Video', () => {
  it('should match the screenshot', () => {
    const wrapper = shallow(<Video />);
    expect(wrapper).toMatchSnapshot();
  });
});
