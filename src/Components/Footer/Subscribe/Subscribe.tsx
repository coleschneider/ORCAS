import * as React from 'react';
import { withFormik, FormikActions, Formik } from 'formik';

import './subscribe.scss';
import { validateSubscribe } from 'utils/validate';
import {instance} from 'utils/apiService'

interface FormFields {
  email_address?: string;
}
interface NewsletterState {
  isFetching: boolean
  error: null | Error
}
class NewsletterForm extends React.Component<{}, NewsletterState> {
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isFetching: false,
    }
  }
  subscribeUser = async(values: FormFields) => {
    this.setState({
      isFetching: true
    })  
     return instance.post('https://cei2re7wt9.execute-api.us-east-1.amazonaws.com/dev', values).then(() => {
       this.setState({
         isFetching: false
       })
       console.log("added to newsletter")
     }).catch(error => {
       this.setState({
        error,
        isFetching: false
       })
     })
  }
  render(){
    return (
      <div className="subscribe-form">
      <Formik
        initialValues={{ email_address: '' }}
        onSubmit={this.subscribeUser}
        validate={validateSubscribe}
      >
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
              {errors.email_address && touched.email_address && <div className="input-feedback">{errors.email_address}</div>}

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <label className="subscribe-message" />
            </form>
          );
        }}
      </Formik>
    </div>
    )
  }
}


export default NewsletterForm