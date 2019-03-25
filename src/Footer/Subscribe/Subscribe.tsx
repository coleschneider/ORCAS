import * as React from 'react';
import { withFormik, FormikActions, Formik } from 'formik';

import './subscribe.scss';
import { validateSubscribe } from '../../utils/validate';

interface FormFields {
  email?: string;
}

const MyForm = props => {
  return (
    <div className="subscribe-form">
      <Formik
        initialValues={{ email: '' }}
        onSubmit={() =>
          window.alert(
            `We're sorry, but subscribing to our newsletter is not currently supported. Please try again later.`,
          )
        }
        validate={validateSubscribe}
      >
        {({ values, touched, handleSubmit, errors, isSubmitting, handleChange, handleBlur, handleReset, dirty }) => {
          return (
            <form onSubmit={handleSubmit} id="mc-form" className="group">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                autoComplete="off"
                className="email"
                id="mc-email"
                placeholder="Email Address"
                className={errors.email && touched.email ? 'email text-input error' : 'email'}
              />
              {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <label className="subscribe-message" />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default MyForm;
