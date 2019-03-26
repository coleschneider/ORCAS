import * as React from 'react';
import Subscribe from './Subscribe';
jest.spyOn(window, 'alert').mockImplementation(() => ({ any: 'ad' }));
describe('Subscribe', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Subscribe />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should match the snapshot', () => {
    const wrapper = mount(<Subscribe />);
    wrapper
      .find('Formik')
      .props()
      .onSubmit();
    expect(window.alert).toBeCalled();
  });
});
