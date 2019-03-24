import * as React from 'react';
import { validateDonation } from '../../../utils/validate';
import { withFormik, FormikActions, FormikProps, FormikValues, FormikErrors, FormikConfig } from 'formik';

interface FormValues {
  amount?: string;
}

interface DonationProps {
  bindSubmitForm: (props: any) => void;
}

interface DonationFormProps {
  initialAmount?: string;
  bindSubmitForm: (props: any) => void;
}

export const ShortDonationForm = (props: DonationProps & FormikProps<FormValues>) => {
  const {
    values,
    touched,
    bindSubmitForm,
    errors,
    isSubmitting,
    submitForm,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty,
  } = props;
  bindSubmitForm(submitForm);
  return (
    <div className="item-plan__top-part">
      <h3 className="item-plan__title">Another amount?</h3>
      <p className="item-plan__price">
        <input
          type="text"
          name="amount"
          placeholder="Enter an amount to give"
          value={values.amount}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.amount && touched.amount ? 'email text-input error' : 'email'}
        />
      </p>
      <p className="item-plan__per">Or give monthly</p>
      {errors.amount && touched.amount && (
        <div className="input-feedback" test-id="donationForm">
          {errors.amount}
        </div>
      )}
    </div>
  );
};

const EnhancedDonationForm = withFormik<DonationFormProps, FormValues>({
  mapPropsToValues: props => {
    return { amount: props.initialAmount || '' };
  },
  validate: validateDonation,

  handleSubmit: (props, values) => {
    window.alert("We're currently not accepting donation right now.");
  },
  displayName: 'ShortDonationForm',
})(ShortDonationForm);

export default EnhancedDonationForm;
