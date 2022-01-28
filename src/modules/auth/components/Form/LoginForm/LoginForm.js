import * as yup from "yup";

export const schema = yup.object().shape({
  login: yup
    .string()
    .max(25, "Maksymalnie 25 znaków")
    .required("Podaj poprawny email/login"),
  password: yup
    .string()
    .min(4, "Minimum 4 znaki")
    .max(15, "Maksymalnie 15 znaków")
    .required("Podaj hasło"),
});
