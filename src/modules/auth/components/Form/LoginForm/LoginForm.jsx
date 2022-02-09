import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import { Button } from "../../../../../components/Button/Button";
import { Input } from "../../../../../components/Input/Input";
import { AuthContext } from "../../../../../context/auth/AuthContext";
import styles from "../form.module.scss";
import { DUMMY_LOGINS } from "../../../../../mock/auth";
import { ErrorBox } from "../../../../../components/ErrorBox/ErrorBox";

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
      <ErrorBox error={errors.login?.message} />
      <Input
        {...register("password")}
        placeholder="Hasło"
        label="Hasło"
        type="password"
      />
      <ErrorBox error={errors.password?.message} />
      <div className={styles.form__separator} />
      <Button type="submit" onClick={() => {}}>
        Zaloguj się
      </Button>
    </form>
  );
};
