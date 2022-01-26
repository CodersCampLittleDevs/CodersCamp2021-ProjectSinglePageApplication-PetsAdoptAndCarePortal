import * as yup from "yup";
import { DUMMY_LOGINS } from "../../../../../constants/auth/auth";

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

export const submitForm = (data, setValidData, login) => {
  console.log(data);
  const user = DUMMY_LOGINS.filter(
    (dummyUser) =>
      dummyUser.email === data.login || dummyUser.username === data.login,
    setValidData(true),
  )[0];
  if (user && user.password === data.password) {
    login();
  } else {
    setValidData(false);
  }
};
