import * as React from 'react';
import Carousel from './Carousel';

describe('Carousel', () => {
  let children = [];
  let wrapper;
  const setupViews = count => {
    for (let i = 0; i < count; i++) {
      children.push(<div key={i} />);
    }
    wrapper = mount(<Carousel>{children.map(c => c)}</Carousel>);
  };
  beforeEach(() => (children = []));
  it('should match the snapshot', () => {
    setupViews(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the total pages from children count', () => {
    setupViews(3);
    expect(wrapper.find('Pagination').props().total).toBe(3);
  });
  it('should increment the number if it is less than total and greater than 0', () => {
    setupViews(3);
    wrapper.instance().handleChangeIndex(1);
    expect(wrapper.state().index).toBe(1);
  });
  it('should start at 0 if the nextIndex is greater than total', () => {
    setupViews(2);
    wrapper.instance().handleChangeIndex(2);
    expect(wrapper.state().index).toBe(0);
  });
  it('should start at total if the nextIndex is less than 0', () => {
    setupViews(2);
    wrapper.instance().handleChangeIndex(-1);
    expect(wrapper.state().index).toBe(1);
  });
});
