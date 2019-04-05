import * as React from 'react';
import Subscribe from './Subscribe';
import apiService from 'utils/apiService';
import * as subscribe from 'utils/validate';

jest.mock('utils/validate');

jest.mock('utils/apiService');
describe('Subscribe', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Subscribe />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call subscribeUser', async () => {
    const subscribeSpy = jest.spyOn(apiService, 'post');
    const wrapper = mount(<Subscribe />);
    await wrapper
      .find('Formik')
      .props()
      .onSubmit('testing@gmail.com');

    expect(subscribeSpy).toHaveBeenCalled();
    expect(subscribeSpy).toHaveBeenCalledWith('/', 'testing@gmail.com');
  });
  it('should call validate when the form changes', async () => {
    const validateSpy = jest.spyOn(subscribe, 'validateSubscribe');
    const wrapper = mount(<Subscribe />);
    wrapper.find('input').simulate('change', {
      target: {
        name: 'email_address',
        value: 'testing@gmail.com',
      },
    });
    wrapper
      .find('Formik')
      .props()
      .validate({ email_address: 'asdsad' });
    expect(validateSpy).toHaveBeenCalled();
  });
});
