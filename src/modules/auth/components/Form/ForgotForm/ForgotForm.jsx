import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../../../../../components/Button/Button";
import { Input } from "../../../../../components/Input/Input";
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
        console.log(newState);
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
      {!passwordState.isUserRegistered && (
        <p>
          Jeśli użytkownik jest zarejestrowany to wysłano nowe hasło na
          powiązany adres e-mail
        </p>
      )}
      {passwordState.isUserRegistered && passwordState.forgottenPassword && (
        <p>Twoje hasło: {passwordState.forgottenPassword}</p>
      )}
      <form onSubmit={handleSubmit(submitForm)}>
        <Input
          {...register("login")}
          placeholder="E-mail / Login"
          label="E-mail / Login"
          type="text"
          classes={styles.registerForm__input}
        />
        <span className={styles.form__error}>{errors.login?.message}</span>
        <span className={styles.form__error}>{errors.password?.message}</span>
        <Button type="submit" onClick={() => {}}>
          Odzyskaj hasło
        </Button>
      </form>
    </>
  );
};
