import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import { Button, Input, ErrorBox, PageTitle } from "../../../../../components";
import { AuthContext } from "../../../../../context/auth/AuthContext";
import styles from "../form.module.scss";

export const LoginForm = () => {
  const { onLogin } = useContext(AuthContext);

  const schema = yup.object().shape({
    email: yup
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

  const submitForm = (data) => {
    onLogin(data);
  };

  return (
    <>
      <PageTitle>Logowanie</PageTitle>
      <form
        onSubmit={handleSubmit(submitForm)}
        className={clsx([styles.form, styles.form__auth])}
      >
        <Input
          {...register("email")}
          placeholder="E-mail / Login"
          label="E-mail / Login"
          type="email"
        />
        <ErrorBox>{errors.email?.message}</ErrorBox>
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
        <Button type="submit" to="/auth/forgot" onClick={() => {}}>
          Przypomnij hasło
        </Button>
      </form>
    </>
  );
};
