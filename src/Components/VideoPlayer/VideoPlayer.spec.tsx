import * as React from 'react';
import VideoPlayer from './VideoPlayer';

describe('VideoPlayer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<VideoPlayer />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should display the spinner and set state to fetching', () => {
    const wrapper = shallow(<VideoPlayer />);
    wrapper
      .find('ReactPlayer')
      .props()
      .onReady();
    expect(wrapper.state().isFetching).toBe(false);
  });
});
