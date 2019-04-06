import * as React from 'react';
import NotFound from './NotFound';

describe('Not found', () => {
  it('should match the snapshot', () => {
    const props = {
      location: {
        pathname: '/404',
      },
    };
    const wrapper = shallow(<NotFound {...props} />);
  });
});
