import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import * as yup from "yup";
import { Button, Input, ErrorBox, PageTitle } from "../../../../../components";
import styles from "../form.module.scss";
import { DUMMY_LOGINS } from "../../../../../mock/auth";

const passwordReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "FORGOT": {
      const user = DUMMY_LOGINS.find(
        (login) =>
          login.email === action.login || login.username === action.login,
      );
      if (user) {
        newState.forgottenPassword = user.password;
        newState.isUserRegistered = true;
      } else {
        newState.isUserRegistered = false;
      }
      return newState;
    }
    default:
      throw new Error("Shouldn't get here");
  }
};

export const ForgotForm = () => {
  const [passwordState, dispatch] = useReducer(passwordReducer, {
    forgottenPassword: null,
    isUserRegistered: true,
  });

  const schema = yup.object().shape({
    login: yup
      .string()
      .max(25, "Maksymalnie 25 znaków")
      .required("Podaj poprawny email/login"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data) => {
    dispatch({ type: "FORGOT", login: data.login });
  };

  return (
    <>
      <PageTitle>Przypomnij hasło</PageTitle>
      {!passwordState.isUserRegistered && (
        <p>
          Jeśli użytkownik jest zarejestrowany to wysłano nowe hasło na
          powiązany adres e-mail
        </p>
      )}
      {passwordState.isUserRegistered && passwordState.forgottenPassword && (
        <p>Twoje hasło: {passwordState.forgottenPassword}</p>
      )}
      <form
        onSubmit={handleSubmit(submitForm)}
        className={clsx([styles.form, styles.form__auth])}
      >
        <Input
          {...register("login")}
          placeholder="E-mail / Login"
          type="text"
          classes={styles.registerForm__input}
        />
        <ErrorBox>{errors.login?.message}</ErrorBox>
        <div className={styles.form__separator} />
        <Button type="submit" onClick={() => {}}>
          Odzyskaj hasło
        </Button>
      </form>
    </>
  );
};
