import * as yup from "yup";

export const contactSchema = yup
  .object()
  .shape({
    firstName: yup.string().required("Field is required"),
    lastName: yup.string().required("Field is required"),
    phoneNumber: yup.string().nullable(),
    email: yup
      .string()
      .email("Invalid email address given")
      .required("Field is required"),
    country: yup.string().nullable(),
    city: yup.string().nullable(),
    message: yup
      .string()
      .required("Field is required")
      .min(10, "Message too short")
  })
  .required();

export type ContactFormData = yup.InferType<typeof contactSchema>;
