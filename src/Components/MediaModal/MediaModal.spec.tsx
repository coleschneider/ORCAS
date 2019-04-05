import * as React from 'react';
import MediaModal from './MediaModal';
import ReactPlayer from 'react-player';
const MediaComponent = () => (
  <div>
    Test
    <img />
  </div>
);
describe('MediaModal', () => {
  let historySpy = jest.fn();
  let wrapper;
  const setupModal = (props = { history: historySpy }) => {
    wrapper = shallow(
      <MediaModal {...props}>
        <MediaComponent />
      </MediaModal>,
    );
  };
  it('matches the snapshot', () => {
    setupModal();
    expect(wrapper).toMatchSnapshot();
  });
  it('The Modal renders with a default open prop of true', () => {
    setupModal();
    expect(wrapper.find('Modal').props().isOpen).toBe(true);
  });
  it('The child renders inside of the modal', () => {
    setupModal();
    expect(wrapper.find(MediaComponent).exists()).toBe(true);
  });
});
