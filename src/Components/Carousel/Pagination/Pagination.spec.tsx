import * as React from 'react';
import Pagination from './Pagination';

describe('Pagination', () => {
  let wrapper;
  const pageProps = {
    total: 3,
    index: 0,
    onChangeIndex: jest.fn(index => {
      return index + 1;
    }),
  };
  const setupPage = (props = {}) => {
    wrapper = shallow(<Pagination {...pageProps} {...props} />);
  };

  it('matches the snapshot', () => {
    setupPage();
    expect(wrapper).toMatchSnapshot();
  });
  it('increments on click', () => {
    setupPage();
    wrapper
      .find('ul')
      .childAt(pageProps.index)
      .props()
      .onClick();
    expect(pageProps.onChangeIndex.mock.calls.length).toBe(1);
    expect(pageProps.onChangeIndex.mock.results[0].value).toBe(1);
  });
});
