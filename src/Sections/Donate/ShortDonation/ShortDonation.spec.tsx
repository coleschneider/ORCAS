import * as React from 'react';
import EnhancedDonationForm, { ShortDonationForm } from './ShortDonation';

describe('DonationForm', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<EnhancedDonationForm />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should show the error if touched', () => {
    const wrapper = shallow(
      <ShortDonationForm
        bindSubmitForm={jest.fn()}
        touched={{ amount: true }}
        values={{ amount: 'test-amount' }}
        errors={{
          amount: 'test error',
        }}
      />,
    );
    expect(wrapper.find('[test-id="donationForm"]').text()).toBe('test error');
  });
  it('should not show the error if it hasnt been touched', () => {
    const wrapper = shallow(
      <ShortDonationForm
        bindSubmitForm={jest.fn()}
        touched={{ amount: false }}
        values={{ amount: 'test-amount' }}
        errors={{
          amount: 'test error',
        }}
      />,
    );
    expect(wrapper.find('[test-id="donationForm"]').exists()).toBeFalsy();
  });
});
