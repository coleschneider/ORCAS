import * as React from 'react';
import Subscribe from './Subscribe';
import apiService from 'utils/apiService';
import * as sinon from 'sinon';
import * as validation from 'utils/validate';

jest.mock('utils/validate');

jest.mock('utils/apiService');

describe('Subscribe', () => {
  let wrapper;
  const submitForm = async (email = 'testing@gmail.com') => {
    wrapper = mount(<Subscribe />);
    await wrapper
      .find('Formik')
      .props()
      .onSubmit(email);
  };
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
      const validateSpy = jest.spyOn(validation, 'validateSubscribe');
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
  describe('Form Messages', () => {
    const clock = sinon.useFakeTimers();
    let apiInstanceSpy;

    it('should handle succes messages correctly', async () => {
      apiInstanceSpy = jest.spyOn(apiService, 'post');
      await submitForm();
      clock.tick(5);
      wrapper.update();
      expect(apiInstanceSpy).toBeCalledWith('/', 'testing@gmail.com');
      expect(
        wrapper
          .find('.Toastify__toast-body')
          .first()
          .text(),
      ).toBe('Successfully subscribed to newsletter!');
    });
    it('should handle error messages correctly', async () => {
      apiInstanceSpy = jest.spyOn(apiService, 'post').mockImplementation(() => Promise.reject());
      await submitForm();
      clock.tick(5);
      wrapper.update();
      expect(wrapper.find('.Toastify__toast-body').text()).toBe(
        'There was an error attempting to subscribe to newsletter',
      );
    });
  });
});
