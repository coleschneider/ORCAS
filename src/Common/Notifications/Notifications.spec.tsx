import * as React from 'react';
import Notifications from './Notifications';
import { toast } from 'react-toastify';

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
  it('should create a toast when onIdle is called', () => {
    const wrapper = mount(<Notifications />);
    wrapper.instance().onIdle({ idle: true });
    wrapper.update();
    expect(wrapper.instance().idleToast).toBeDefined();
  });
  it('should update the toast when the toast is defined and its not in idle', () => {
    const wrapper = mount(<Notifications />);
    const toastSpy = jest.spyOn(toast, 'update');

    const idleToastId = 'asdad';
    wrapper.instance().idleToast = idleToastId;

    wrapper.instance().onIdle({ idle: false });

    expect(toastSpy).toHaveBeenCalledWith(idleToastId, { autoClose: 3000, onClose: expect.any(Function) });
  });
  it('should set the idleToast instance to null after seconds following activity', () => {
    const wrapper = mount(<Notifications />);
    const onCloseSpy = jest.spyOn(toast, 'update');
    wrapper.instance().onIdle({ idle: true });
    wrapper.instance().onActive();
    setTimeout(() => {
      expect(wrapper.instance().idleToast).toBe(null);
    }, 5000);

    expect(onCloseSpy).toBeCalledWith(
      expect.any(String),
      expect.objectContaining({
        onClose: expect.any(Function),
      }),
    );
  });
});
