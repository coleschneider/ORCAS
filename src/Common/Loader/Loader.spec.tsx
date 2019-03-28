import * as React from 'react';
import * as Loader from './Loader';

describe('Loader', () => {
  const spy = jest.spyOn(Loader, 'Content');
  it('should match the snapshot when isFetching is false', () => {
    const wrapper = shallow(<Loader.default isFetching={false} />);
  });
  it('should match the snapshot when fetching', () => {
    const wrapper = shallow(<Loader.default isFetching={true} />);
  });
  it('should call the container', () => {
    const wrapper = mount(<Loader.default isFetching={true} />);

    expect(wrapper.find('Spring')).toBeDefined();
  });
});
