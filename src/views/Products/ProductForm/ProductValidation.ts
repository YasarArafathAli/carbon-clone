import * as Yup from  "yup";

export const validationSchema = Yup.object().shape({
    productName: Yup.string()
      .required('Product Name is required!'),
    brand: Yup.string()
      .required('Brand is required!'),
  })