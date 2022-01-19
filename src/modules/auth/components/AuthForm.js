import React, { useReducer, useContext } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/FormElements/Input/Input";
import AuthContext from "../../../context/auth/auth-context";
import { DUMMY_LOGINS } from "../../../constants/auth/auth";
import { authReducer } from "../hooks/AuthReducer";

export const AuthForm = () => {
  const [authState, dispatch] = useReducer(authReducer, {
    isLoggingForm: true,
    isBusinessClient: false,
  });
  const authCtx = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const { isLoggingForm, isBusinessClient } = authState;

  const login = () => {
    authCtx.onLogin();
  };
  const logout = () => {
    authCtx.onLogout();
  };

  const changeFormType = () => {
    dispatch({ type: "AUTH_FORM" });
  };
  const changeTypeOfRegister = () => {
    dispatch({ type: "REGISTER_TYPE" });
  };

  const onSubmit = (data) => {
    switch (isLoggingForm) {
      case true: {
        const user = DUMMY_LOGINS.filter(
          (dummyUser) =>
            dummyUser.email === data.email ||
            dummyUser.username === data.username,
        )[0];
        if (user && user.password === data.password) {
          login();
        } else {
          console.log("Podałeś błędne dane");
        }
        return;
      }
      default:
        throw new Error("Should not get there!");
    }
  };

  const FORM_TYPE = isLoggingForm ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        id="email"
        type="input"
        placeholder="E-mail / Nazwa Użytkownika"
      />
      <Input
        register={register}
        id="password"
        type="password"
        placeholder="Hasło"
      />
      <Button type="submit">Zaloguj się</Button>
    </form>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        id="email"
        type="input"
        placeholder="E-mail / Nazwa Użytkownika"
      />
      <Input
        register={register}
        id="username"
        type="input"
        placeholder="Nazwa użytkownika"
      />
      <Input register={register} id="city" type="input" placeholder="Miasto" />
      <Input
        register={register}
        id="phone"
        type="input"
        placeholder="Numer telefonu"
      />
      <Input
        register={register}
        id="password"
        type="password"
        placeholder="Hasło"
      />
      {isBusinessClient && (
        <>
          <Input
            register={register}
            id="business"
            type="input"
            placeholder="Nazwa firmy"
          />
          <Input register={register} id="nip" type="input" placeholder="NIP" />
        </>
      )}
      <Button type="submit">
        {isLoggingForm ? "Zaloguj się" : "Zarejestruj się"}
      </Button>
    </form>
  );

  return (
    <>
      {FORM_TYPE}
      <Button type="button" onClick={changeFormType}>
        Zmień na {isLoggingForm ? "Rejestrację" : "Logowanie"}
      </Button>
      {!isLoggingForm && (
        <Button type="button" onClick={changeTypeOfRegister}>
          Zarejestruj jako {isBusinessClient ? "osoba prywatna" : "firma"}
        </Button>
      )}
      {authCtx.isLoggedIn && (
        <button type="button" onClick={logout}>
          Logout
        </button>
      )}
    </>
  );
};
