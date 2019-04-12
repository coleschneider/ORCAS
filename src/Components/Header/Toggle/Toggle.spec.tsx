import * as React from 'react';
import Toggle from './Toggle';

describe('Toggle', () => {
  const props = {
    isMobile: false,
    isOpen: false,
    onClick: jest.fn(),
  };
  let wrapper;
  const setup = (override = {}) => (wrapper = shallow(<Toggle {...props} {...override} />));

  it('matches the snapshot', () => {
    setup();
    expect(wrapper).toMatchSnapshot();
  });
  it('displays properly when isOpen is false', () => {
    setup();
    expect(wrapper.hasClass('is-clicked')).toBe(false);
  });
  it('displays properly when isOpen is true', () => {
    setup({ isOpen: true });
    expect(wrapper.hasClass('is-clicked')).toBe(true);
  });
  it('calls onClick correctly', () => {
    const mockClick = jest.fn();
    setup({ onClick: mockClick });
    expect(mockClick.mock.invocationCallOrder).toMatchObject([]);
    wrapper.find('[test-id="toggle"]').simulate('click');
    expect(mockClick.mock.invocationCallOrder[0]).toBe(1);
  });
});
