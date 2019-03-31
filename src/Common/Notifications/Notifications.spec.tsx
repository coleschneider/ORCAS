import * as React from 'react';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('should work', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toMatchSnapshot();
  });
});
