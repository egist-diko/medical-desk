import * as Yup from "yup";

var regex = /[A-Za-z]{6}[0-9lmnpqrstuvLMNPQRSTUV]{2}[abcdehlmprstABCDEHLMPRST]{1}[0-9lmnpqrstuvLMNPQRSTUV]{2}[A-Za-z]{1}[0-9lmnpqrstuvLMNPQRSTUV]{3}[A-Za-z]{1}/;

const part1Schema = Yup.object().shape({
  store: Yup.object().required("This field is required"),
  date: Yup.string().required("This field is required"),
});

const part2Schema = Yup.object().shape({
  type: Yup.array().of(
    Yup.object().shape({
      service: Yup.number(),
      service_name: Yup.string(),
    })
  ),
});

const part3Schema = Yup.object().shape({
  time: Yup.mixed().required("This field is required"),
  date: Yup.mixed().required("This field is required"),
});

const part4Schema = Yup.object().shape({
  service: Yup.array().of(
    Yup.object().shape({
      firstname: Yup.string()
        .max(50, "First name is too long")
        .required("First name is required"),
      lastname: Yup.string()
        .max(50, "Last name is too long")
        .required("Last name is required"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("This field is required"),
      phone: Yup.string().required("Phone is required"),
      nationality: Yup.string().required("Nacionality is required"),
      fiscal_code: Yup.string()
        .matches(regex, "Fiscal code is required")
        .required("Fiscal code is required"),
      birthday: Yup.date().required("Birthday is required"),
      sex: Yup.string().required("Pick a gender"),
      residency: Yup.string().required("This field is required"),
      postal_code: Yup.string().required("This field is required"),
      address: Yup.string().required("Address is required"),
      servicename: Yup.string(),
    })
  ),
  term1: Yup.string().required("Please check the box"),
  term2: Yup.string().required("Please check the box"),
});

const part5Schema = [
  Yup.object().shape({
    fname: Yup.string().required("This field is required"),
    lname: Yup.string().required("This field is required"),
    fcode: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Enter valid email address")
      .required("This field is required"),
    address: Yup.string().required("This field is required"),
    city: Yup.string().required("This field is required"),
    postalcode: Yup.string().required("This field is required"),
    province: Yup.string().required("This field is required"),
    nation: Yup.string().required("This field is required"),
  }),
  Yup.object().shape({
    fname: Yup.string().required("This field is required"),
    lname: Yup.string().required("This field is required"),
    fcode: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Enter valid email address")
      .required("This field is required"),
    address: Yup.string().required("This field is required"),
    city: Yup.string().required("This field is required"),
    postalcode: Yup.string().required("This field is required"),
    province: Yup.string().required("This field is required"),
    nation: Yup.string().required("This field is required"),
    ragione: Yup.string().required("This field is required"),
    VAT: Yup.string().required("This field is required"),
    recipient_code: Yup.string().required("This field is required"),
    PEC: Yup.string().required("This field is required"),
    nation: Yup.string().required("This field is required"),
  }),
];

const validationSchema = [
  part1Schema,
  part2Schema,
  part3Schema,
  part4Schema,
  part5Schema,
];

export default validationSchema;
