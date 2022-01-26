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
    .number("Numer musi zawierać cyfry")
    .positive("Numer musi być większy od 0")
    .integer("Numer musi zaierać cyfry")
    .required("Podaj numer telefonu"),
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
