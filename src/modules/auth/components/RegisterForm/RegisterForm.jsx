import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../../components/Button/Button";
import { Input } from "../../../../components/Input/Input";
import { DUMMY_LOGINS } from "../../../../constants/auth/auth";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isPrivateMode, setIsPrivateMode] = useState(true);

  const changeTypeOfRegister = () => {
    setIsPrivateMode((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    const { city, email, password, phone, username } = data;
    DUMMY_LOGINS.push({
      city,
      email,
      password,
      phone,
      username,
    });
    console.log(data);
    console.log(DUMMY_LOGINS);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        id="email"
        placeholder="E-mail / Nazwa Użytkownika"
        label="E-mail"
        name="email"
      />
      {errors.email && <span className="">Wpisz e-mail</span>}
      <Input
        register={register}
        id="username"
        placeholder="Nazwa użytkownika"
        label="Nazwa użytkownika"
        name="username"
      />
      {errors.username && <span className="">Wpisz nazwę użytkownika</span>}
      <Input
        register={register}
        id="city"
        placeholder="Miasto"
        label="Miasto"
        name="city"
      />
      {errors.city && <span className="">Wpisz miasto</span>}
      <Input
        register={register}
        id="phone"
        placeholder="Numer telefonu"
        label="Numer telefonu"
        name="phone"
      />
      {errors.phone && <span className="">Wpisz numer telefonu</span>}
      <Input
        register={register}
        id="password"
        type="password"
        placeholder="Hasło"
        label="Hasło"
        name="password"
      />
      {errors.password && <span className="">Wpisz hasło</span>}
      <Input
        register={register}
        id="passwordConfirm"
        type="password"
        placeholder="Hasło"
        label="Powtórz hasło"
        name="confirmPassword"
      />
      {errors.confirmPassword && <span className="">Potwierdź hasło</span>}
      {!isPrivateMode && (
        <>
          <Input
            register={register}
            id="business"
            placeholder="Nazwa firmy"
            label="Nazwa firmy"
            name="business"
          />
          {errors.business && <span className="">Wpisz nazwę firmy</span>}
          <Input
            register={register}
            id="nip"
            placeholder="NIP"
            label="NIP"
            name="NIP"
          />
          {errors.NIP && <span className="">Wpisz NIP</span>}
        </>
      )}
      <Button type="submit" onClick={() => {}}>
        Zarejestruj
      </Button>
      <Button type="button" onClick={changeTypeOfRegister}>
        Zarejestruj jako {!isPrivateMode ? "osoba prywatna" : "firma"}
      </Button>
    </form>
  );
};
