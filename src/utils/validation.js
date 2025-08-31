export const validateForm = (values, type) => {
  let errors = {};

  const fullNameRegex = /^[a-zA-Z ]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (type === 'signup') {
    if (!values.fullName) errors.fullName = 'Full Name is Required';
    else if (!fullNameRegex.test(values.fullName)) {
      errors.fullName = 'Please Enter The Valid Full Name';
    }
  }

  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (!emailRegex.test(values.email))
    errors.email = 'Invalid email format';

  if (!values.password) errors.password = 'Password is Required';
  else if (!passwordRegex.test(values.password)) {
    errors.password = 'Please enter a Valid Password';
  }

  if (type === 'signup') {
    if (!values.confirmPassword)
      errors.confirmPassword = 'Confirm Password is Required';
    else if (values.password !== values.confirmPassword)
      errors.confirmPassword = "Password Didn't Matches";
  }

  return errors;
};
