import * as React from 'react';
import ModalButton from './ModalButton';

describe('ModalButton', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<ModalButton text="testing" imageid="testimage" />);
  });
});
