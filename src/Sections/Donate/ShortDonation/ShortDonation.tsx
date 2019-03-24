import * as React from 'react';
import { withFormik, FormikActions, FormikProps, FormikValues, FormikErrors } from 'formik';

interface FormValues {
  amount?: string;
}

const ShortDonationForm = (props: FormikProps<FormikValues>) => {
  const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset, dirty } = props;

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
      {errors.amount && touched.amount && <div className="input-feedback">{errors.amount}</div>}
    </div>
  );
};
interface DonationFormProps {
  initialAmount?: string;
}
const EnhancedDonationForm = withFormik<DonationFormProps, FormValues>({
  mapPropsToValues: props => ({ amount: props.initialAmount || '' }),
  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.amount) {
      errors.amount = 'Required';
    } else if (!/^[0-9]+(\.[0-9]{1,2})?$/.test(values.amount)) {
      errors.amount = 'Please enter a valid US Dollar amount';
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'ShortDonationForm', 
})(ShortDonationForm);

export default EnhancedDonationForm;
