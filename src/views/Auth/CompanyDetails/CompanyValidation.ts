import * as Yup from  "yup";

export const validationSchema = Yup.object().shape({
    companyName: Yup.string()
      .required('Company Name is required!'),
      companyType: Yup.string()
      .required('Company type is required!'),
      revenue: Yup.string()
      .required('Revenue range is required!'),
  })