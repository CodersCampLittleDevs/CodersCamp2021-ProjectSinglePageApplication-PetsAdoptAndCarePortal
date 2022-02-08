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

export const LoginForm = () => {
  const { isLoggedIn, onLogin } = useContext(AuthContext);
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

  const login = (user) => {
    onLogin(user);
  };

  const submitForm = (data) => {
    const user = DUMMY_LOGINS.find(
      (dummyUser) =>
        dummyUser.email === data.login || dummyUser.username === data.login,
    );
    const userDataWithoutPassword = {};
    Object.keys(user).forEach((key) => {
      if (key !== "password") {
        userDataWithoutPassword[key] = user[key];
      }
    });

    if (user && user.password === data.password) {
      login(userDataWithoutPassword);
    } else {
      setValidData(false);
    }
  };

  return (
    <>
      {isLoggedIn ? <p>Zalogowany</p> : <p>Niezalogowany</p>}
      {!validData && <p>Podałeś błędne dane</p>}
      <form
        onSubmit={handleSubmit(submitForm)}
        className={clsx([styles.form, styles.form__auth])}
      >
        <Input
          {...register("login")}
          placeholder="E-mail / Login"
          label="E-mail / Login"
          type="text"
        />
        <span className={styles.form__error}>{errors.login?.message}</span>
        <Input
          {...register("password")}
          placeholder="Hasło"
          label="Hasło"
          type="password"
        />
        <span className={styles.form__error}>{errors.password?.message}</span>
        <div className={styles.form__separator}> </div>
        <Button type="submit" onClick={() => {}}>
          Zaloguj się
        </Button>
      </form>
    </>
  );
};
