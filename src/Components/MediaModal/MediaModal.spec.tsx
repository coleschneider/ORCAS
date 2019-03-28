import * as React from 'react';
import MediaModal from './MediaModal';
import ReactPlayer from 'react-player';

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
  it('renders with fetching state', () => {
    const historyMock = { goBack: jest.fn() };
    const wrapper = shallow(<MediaModal history={historyMock} />);

    expect(wrapper.state().isFetching).toBe(true);
  });
});
