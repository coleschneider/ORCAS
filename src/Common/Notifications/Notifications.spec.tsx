import * as React from 'react';
import Notifications from './Notifications';
jest.useFakeTimers();

describe('Notifications', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call the timer', () => {
    const wrapper = mount(<Notifications />);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 0);
  });
});
