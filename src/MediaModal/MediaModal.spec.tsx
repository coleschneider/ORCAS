import * as React from 'react';
import MediaModal from './MediaModal';

describe('MediaModal', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<MediaModal history={{ goBack: jest.fn() }} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('The Modal renders with a default open prop of true', () => {
    const wrapper = shallow(<MediaModal history={{ goBack: jest.fn() }} />);
    expect(wrapper.find('Modal').props().isOpen).toBe(true);
  });
  it('The Modal renders with a default open prop of true', () => {
    const wrapper = shallow(<MediaModal history={{ goBack: jest.fn() }} />);
    expect(wrapper.find('Modal').props().isOpen).toBe(true);
  });
  it('closes when the outside is clicked', () => {
    const historyMock = { goBack: jest.fn(), preventDefault: () => {} };
    const wrapper = shallow(<MediaModal history={historyMock} />);
    wrapper.props().onRequestClose();
    expect(historyMock.goBack.mock.calls.length).toBe(1);
  });
});
