import * as React from 'react';
import { Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import './newsletter.scss';
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
  notifySuccess = ({ message }) =>
    toast.success(message, {
      autoClose: 5000,
      className: 'notification-formSuccess',
      position: 'bottom-right',
    });
  notifyError = () =>
    toast.warn(`There was an error attempting to subscribe to newsletter`, {
      autoClose: 5000,
      className: 'notification-formError',
      position: 'bottom-right',
    });
  subscribeUser = async (values: FormFields, cb) => {
    this.setState({
      isFetching: true,
    });
    return instance
      .post('/', values)
      .then(res => {
        this.setState({
          isFetching: false,
        });
        this.notifySuccess(res.data);
        cb();
      })
      .catch(error => {
        this.notifyError();
        this.setState({
          error,
          isFetching: false,
        });
      });
  };
  render() {
    const { isFetching } = this.state;
    return (
      <div className="subscribe-form">
        <Formik initialValues={{ email_address: '' }} onSubmit={this.subscribeUser} validate={validateSubscribe}>
          {({
            values,
            touched,
            handleSubmit,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            resetForm,
            initialValues,
          }) => {
            return (
              <form
                onSubmit={e => {
                  handleSubmit(e, resetForm);
                }}
                id="mc-form"
                className="group"
                test-id="contact-form"
              >
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
                  <div test-id="contact-form-errors" className="input-feedback">
                    {errors.email_address}
                  </div>
                )}

                <button test-id="newsletter-btn" className="btn" type="submit" disabled={isSubmitting || isFetching}>
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
