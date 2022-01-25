import { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { DUMMY_LOGINS } from "../../../../constants/auth/auth";
import { Button } from "../../../../components/Button/Button";
import { Input } from "../../../../components/Input/Input";
import AuthContext from "../../../../context/auth/auth-context";

export const LoginForm = () => {
  const authContext = useContext(AuthContext);
  const [validData, setValidData] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { register, handleSubmit } = useForm();

  const login = () => {
    authContext.onLogin();
  };

  const onSubmit = (data) => {
    const user = DUMMY_LOGINS.filter(
      (dummyUser) =>
        dummyUser.email === data.email || dummyUser.username === data.email,
    )[0];
    if (user && user.password === data.password) {
      login();
    } else {
      emailRef.current.value = "";
      passwordRef.current.value = "";
      setValidData(false);
    }
  };
  return (
    <>
      {authContext.isLoggedIn ? <p>Zalogowany</p> : <p>Niezalogowany</p>}
      {!validData && <p>Podałeś błędne dane</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          id="email"
          type="input"
          placeholder="E-mail / Nazwa Użytkownika"
          label="E-mail"
          name="email"
          inputRef={emailRef}
        />
        <Input
          register={register}
          id="password"
          type="password"
          placeholder="Hasło"
          label="Hasło"
          name="password"
          inputRef={passwordRef}
        />
        <Button type="submit" onClick={() => {}}>
          Zaloguj się
        </Button>
      </form>
    </>
  );
};
