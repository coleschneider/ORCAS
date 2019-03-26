import * as React from 'react';
import Carousel from './Carousel';

describe('Carousel', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Carousel>child</Carousel>);
    expect(wrapper).toMatchSnapshot();
  });
});
