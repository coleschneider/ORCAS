import * as React from 'react';
import { withFormik, FormikActions } from 'formik';

import './subscribe.scss';

interface FormFields {
  email?: string;
}

const MyForm = props => {
  const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset, dirty } = props;

  return (
    <div className="subscribe-form">
      <form onSubmit={handleSubmit} id="mc-form" className="group">
        <input
          autoComplete="off"
          type="email"
          name="email"
          className="email"
          id="mc-email"
          placeholder="Email Address"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? 'email text-input error' : 'email'}
        />
        {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}

        <input type="submit" name="subscribe" disabled={dirty || isSubmitting} value="Sign Up" />
        <label className="subscribe-message" />
      </form>
    </div>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ email: '' }),
  validate: values => {
    const errors: FormFields = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'SubscribeForm', // helps with React DevTools
})(MyForm);

export default MyEnhancedForm;
