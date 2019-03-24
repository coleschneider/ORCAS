import * as React from 'react';
import MediaModal from './MediaModal';

describe('MediaModal', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<MediaModal history={{ goBack: jest.fn() }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
