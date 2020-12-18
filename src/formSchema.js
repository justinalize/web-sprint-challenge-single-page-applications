import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "name must be 3 chars long"),

  email: yup.string().email("must be an email"),

  special: yup
    .string()
    .required("must be an email")
    .min(6, "password must be min 8 chars long"),
    role: yup
    .string()
    .oneOf(["small", "medium", "large", "exlarge"], "size is required"),
  pep: yup.boolean(),
  exCheese: yup.boolean(),
  sausage: yup.boolean(),
  bacon: yup.boolean(),
  onions: yup.boolean(),
  mushroom: yup.boolean(),
});