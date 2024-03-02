import * as Yup from  "yup";

export const validationSchema = Yup.object().shape({
    
    locality: Yup.string()
      .required('Locality is required!'),
      province: Yup.string()
      .required('Province is required!'),
      city: Yup.string()
      .required('City is required!'),
      postalCode: Yup.string()
      .required('Postal Code is required!'),
      country: Yup.string()
      .required('Country is required!'),
  })