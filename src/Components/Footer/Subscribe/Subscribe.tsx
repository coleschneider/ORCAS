import * as React from 'react';
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import './subscribe.scss';
import { validateSubscribe } from 'utils/validate';
import instance from 'utils/apiService';

interface FormFields {
  email_address?: string;
}
interface NewsletterState {
  isFetching: boolean;
  error: null | Error;
}
class NewsletterForm extends React.Component<{}, NewsletterState> {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: false,
    };
  }
  notifySuccess = () => toast.success(
    `Successfully subscribed to newsletter`,
    {
      autoClose: 5000,
      className: 'notification-inactive',
      position: 'bottom-right',
    },
  )
  notifyError = () => toast.warn(
    `There was an error attempting to subscribe to newsletter`,
    {
      autoClose: 5000,
      className: 'notification-inactive',
      position: 'bottom-right',
    },
  )
  subscribeUser = async (values: FormFields) => {
    this.setState({
      isFetching: true,
    });
    return instance
      .post('/', values)
      .then(() => {
        this.setState({
          isFetching: false,
        });
        this.notifySuccess()
      })
      .catch(error => {
        this.notifyError()
        this.setState({
          error,
          isFetching: false,
        });
      });
  };
  render() {
    return (
      <div className="subscribe-form">
        <Formik initialValues={{ email_address: '' }} onSubmit={this.subscribeUser} validate={validateSubscribe}>
          {({ values, touched, handleSubmit, errors, isSubmitting, handleChange, handleBlur, handleReset, dirty }) => {
            return (
              <form onSubmit={handleSubmit} id="mc-form" className="group">
                <input
                  type="email"
                  name="email_address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email_address}
                  autoComplete="off"
                  className="email_address"
                  id="mc-email"
                  placeholder="Email Address"
                  className={errors.email_address && touched.email_address ? 'email text-input error' : 'email'}
                />
                {errors.email_address && touched.email_address && (
                  <div className="input-feedback">{errors.email_address}</div>
                )}

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
                <label className="subscribe-message" />
              </form>
            );
          }}
        </Formik>
        <ToastContainer />
      </div>
    );
  }
}

export default NewsletterForm;
