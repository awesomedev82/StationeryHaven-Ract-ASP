import * as yup from "yup";

export const validationSchema = yup.object({
  fullName: yup.string().required("Full name is required"),
  address1: yup
    .string()
    .email("Invalid email address")
    .required("Email address is required"),
  address2: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  country: yup.string().required(),
});
