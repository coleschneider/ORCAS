import * as React from 'react';
import Subscribe from './Subscribe';
import apiService from 'utils/apiService';
import * as subscribe from 'utils/validate';
import { toast } from 'react-toastify';

jest.mock('utils/validate');

jest.mock('utils/apiService');
describe('Subscribe', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Subscribe />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Subscribe Form', () => {
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
    it('should show the correct toast when the form submits succesfully', () => {
      const wrapper = mount(<Subscribe />);
      const toastSpy = jest.spyOn(toast, 'success');
      wrapper.instance().notifySuccess({ message: 'Testing' });
      expect(toastSpy).toHaveBeenCalled();
      expect(toastSpy).toHaveBeenCalledWith('Testing', {
        autoClose: 5000,
        className: 'notification-formSuccess',
        position: 'bottom-right',
      });
    });
    it('should show a generic error when submit fails', () => {
      const wrapper = mount(<Subscribe />);
      const toastSpy = jest.spyOn(toast, 'warn');
      wrapper.instance().notifyError();
      expect(toastSpy).toHaveBeenCalled();
      expect(toastSpy).toHaveBeenCalledWith('There was an error attempting to subscribe to newsletter', {
        autoClose: 5000,
        className: 'notification-formError',
        position: 'bottom-right',
      });
    });
  });
});
