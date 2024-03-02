import * as Yup from  "yup";

export const validationSchema = Yup.object().shape({
  admin: Yup.string()
  .email('Admin is not valid!')
  .required('Admin is required!'),
  position: Yup.string()
  .email('Position is not valid!')
  .required('Position is required!'),
    email: Yup.string()
      .email('E-mail is not valid!')
      .required('E-mail is required!'),
    password: Yup.string()
      .min(6, 'Password has to be longer than 6 characters!')  
      .required('Password is required!')
  })