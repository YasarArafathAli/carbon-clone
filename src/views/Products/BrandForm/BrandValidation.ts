import * as Yup from  "yup";

export const validationSchema = Yup.object().shape({
    brandName: Yup.string()
      .required('Brand Name is required!'),
    category: Yup.string()
      .required('Brand is required!'),
  })