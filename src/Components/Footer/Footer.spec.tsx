import * as React from 'react';
import Footer from './Footer';

describe('Footer', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<Footer showScroller={false} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('contains the proper className when showScroller is true', () => {
    const wrapper = shallow(<Footer showScroller={true} />);
    expect(wrapper.find('[test-id="footer-scroll"]').hasClass('link-is-visible')).toBe(true);
  });
  it('contains the proper className when showScroller is false', () => {
    const wrapper = shallow(<Footer showScroller={false} />);
    expect(wrapper.find('[test-id="footer-scroll"]').hasClass('link-is-visible')).toBe(false);
  });
});
