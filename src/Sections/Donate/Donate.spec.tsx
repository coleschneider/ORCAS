import * as React from 'react';
import Donate from './Donate';

describe('Donate', () => {
  let wrapper;
  let instance;
  const setupBoundForm = formData => {
    wrapper = shallow(<Donate />);
    instance = wrapper.instance();
    instance.bindSubmitForm(formData);
  };

  it('matches the snapshot', () => {
    const wrapper = shallow(<Donate />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set the submitDonation value when bindsubmitForm is called', () => {
    setupBoundForm({ formData: 'test' });
    jest.spyOn(instance, 'bindSubmitForm');
    expect(instance.submitDonation).toMatchObject({ formData: 'test' });
  });
  it('should call handleSubmit if the bounded function is not null', () => {
    const submitHandler = jest.fn();
    setupBoundForm(submitHandler);
    instance.handleSubmit({ event: 'someevent' });
    expect(submitHandler).toHaveBeenCalled();
    expect(submitHandler.mock.calls[0][0]).toMatchObject({ event: 'someevent' });
  });
  it('should not call handleSubmit if the bounded function is null', () => {
    setupBoundForm(null);
    expect(instance.submitDonation).toBe(null);
  });
});
