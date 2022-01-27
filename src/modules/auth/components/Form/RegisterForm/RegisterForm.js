import * as yup from "yup";
import { DUMMY_LOGINS } from "../../../../../constants/auth/auth";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Podaj poprawny email")
    .max(25, "Maksymalnie 25 znaków")
    .required("Podaj adres e-mail"),
  username: yup
    .string()
    .min(3, "Minimum 3 znaki")
    .max(15, "Maksymalnie 15 znaków")
    .required("Podaj nazwę użytkownika"),
  city: yup.string().required("Podaj miasto"),
  phone: yup
    .string()
    .required("Podaj numer telefonu")
    .matches(/^[0-9]+$/, "Numer musi posiadać tylko cyfry")
    .min(7, "Numer musi posiadać minimum 7 znaków")
    .max(10, "Numer musi posiadać maksymalnie 10 znaków"),
  password: yup
    .string()
    .min(4, "Minimum 4 znaki")
    .max(15, "Maksymalnie 15 znaków")
    .required("Podaj hasło"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Hasła muszą być identyczne")
    .required("Hasła muszą być identyczne"),
  business: yup.string(),
  NIP: yup.number().positive().integer(),
});

export const formSubmit = (data) => {
  const { city, email, password, phone, username, business, NIP } = data;
  DUMMY_LOGINS.push({
    city,
    email,
    password,
    phone,
    username,
    business,
    NIP,
  });
};
