import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import { Button, Input, ErrorBox } from "../../../../../components";
import { AuthContext } from "../../../../../context/auth/AuthContext";
import styles from "../form.module.scss";
import { DUMMY_LOGINS } from "../../../../../mock/auth";

export const LoginForm = () => {
  const { onLogin } = useContext(AuthContext);
  const [validData, setValidData] = useState(true);

  const schema = yup.object().shape({
    login: yup
      .string()
      .max(25, "Maksymalnie 25 znaków")
      .required("Podaj poprawny email/login"),
    password: yup
      .string()
      .required("Podaj hasło")
      .min(4, "Minimum 4 znaki")
      .max(15, "Maksymalnie 15 znaków"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const login = () => {
    onLogin();
  };

  const submitForm = (data) => {
    const user = DUMMY_LOGINS.find(
      (dummyUser) =>
        dummyUser.email === data.login || dummyUser.username === data.login,
    );

    if (user && user.password === data.password) {
      login();
    } else {
      setValidData(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className={clsx([styles.form, styles.form__auth])}
    >
      {!validData && <ErrorBox error="Podałeś błędne dane" />}
      <Input
        {...register("login")}
        placeholder="E-mail / Login"
        label="E-mail / Login"
        type="text"
      />
      <ErrorBox>{errors.login?.message}</ErrorBox>
      <Input
        {...register("password")}
        placeholder="Hasło"
        label="Hasło"
        type="password"
      />
      <ErrorBox>{errors.password?.message}</ErrorBox>
      <div className={styles.form__separator} />
      <Button type="submit" onClick={() => {}}>
        Zaloguj się
      </Button>
      <Button type="submit" onClick={() => {}}>
        Zarejestruj się
      </Button>
    </form>
  );
};
