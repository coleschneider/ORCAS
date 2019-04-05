import { FormikErrors } from 'formik';
interface FormValues {
  amount?: string;
}
interface SubscribeFormValues {
  email_address?: string;
}
export function validateDonation(values: FormValues) {
  const errors: FormikErrors<FormValues> = {};
  if (!values.amount) {
    errors.amount = 'Required';
  } else if (!/^[0-9]+(\.[0-9]{1,2})?$/.test(values.amount)) {
    errors.amount = 'Please enter a valid US Dollar amount';
  }
  return errors;
}
export function validateSubscribe(values: SubscribeFormValues) {
  const errors: FormikErrors<SubscribeFormValues> = {};
  if (!values.email_address) {
    errors.email_address = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email_address)) {
    errors.email_address = 'Invalid email address';
  }
  return errors;
}
