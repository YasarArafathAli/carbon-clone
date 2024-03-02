import * as Yup from  "yup";

export const validationSchema = Yup.object().shape({
    supplierName: Yup.string()
      .required('Product Name is required!'),
    address: Yup.string()
      .required('Brand is required!'),
  })