import { FormikErrors } from 'formik';
interface FormValues {
  amount?: string;
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
