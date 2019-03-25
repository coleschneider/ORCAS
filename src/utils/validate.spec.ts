import * as validation from './validate';

describe('validateDonation', () => {
  describe('validateDonation', () => {
    it('should return error if alphanumerical is entered', () => {
      const errors = validation.validateDonation({
        amount: 'an amount',
      });
      expect(errors.amount).toBe('Please enter a valid US Dollar amount');
    });
    it('should return error if more than anything past two decimal points is entered', () => {
      const errors = validation.validateDonation({
        amount: '0.000',
      });
      expect(errors.amount).toBe('Please enter a valid US Dollar amount');
    });
    it('should not return error if decimal places are omitted', () => {
      const errors = validation.validateDonation({
        amount: '12',
      });
      expect(errors.amount).toBeUndefined();
    });
    it('should not return error if decimal places are included', () => {
      const errors = validation.validateDonation({
        amount: '12.00',
      });
      expect(errors.amount).toBeUndefined();
    });
  });

  describe('validateSubscribe', () => {
    it('should return error if email is invalid', () => {
      const errors = validation.validateSubscribe({
        email: 'sadsd',
      });
      expect(errors.email).toBe('Invalid email address');
    });
  });
});
