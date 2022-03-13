import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import { Button, Input, ErrorBox, PageTitle } from "../../../../../components";
import styles from "../form.module.scss";
import { clearFormAfterSubmit } from "../../../../../utils/clearFormAfterSubmit";
import { useHttpClient } from "../../../../../hooks/httpHook";

export const RegisterForm = () => {
  const { sendRequest } = useHttpClient();
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Podaj adres e-mail")
      .email("Podaj poprawny email")
      .max(25, "Maksymalnie 25 znaków"),
    username: yup
      .string()
      .required("Podaj nazwę użytkownika")
      .min(3, "Minimum 3 znaki")
      .max(15, "Maksymalnie 15 znaków"),
    city: yup.string().required("Podaj miasto"),
    phone: yup
      .string()
      .required("Podaj numer telefonu")
      .matches(/^[0-9]+$/, "Numer musi posiadać tylko cyfry")
      .min(7, "Numer musi posiadać minimum 7 znaków")
      .max(10, "Numer musi posiadać maksymalnie 10 znaków"),
    password: yup
      .string()
      .required("Podaj hasło")
      .min(4, "Minimum 4 znaki")
      .max(15, "Maksymalnie 15 znaków"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Hasła muszą być identyczne")
      .required("Hasła muszą być identyczne"),
    business: yup.string(),
    NIP: yup.number().positive().integer(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isPrivateMode, setIsPrivateMode] = useState(true);

  const changeTypeOfRegister = () => {
    setIsPrivateMode((prevState) => !prevState);
  };

  const formSubmit = async (data) => {
    const { city, email, password, phone, username } = data;
    try {
      await sendRequest(
        "http://localhost:8000/auth/register",
        "POST",
        JSON.stringify({
          email,
          password,
          username,
          city,
          phone,
        }),
        {
          "Content-Type": "application/json",
        },
      );
    } catch (error) {
      console.log(error);
    }
    console.log(clearFormAfterSubmit(getValues, setValue));
  };

  return (
    <>
      <PageTitle>Rejestracja</PageTitle>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className={clsx([styles.form, styles.form__auth])}
      >
        <Input
          {...register("email")}
          placeholder="E-mail"
          label="E-mail"
          type="text"
          classes={styles.form__input}
        />
        <ErrorBox>{errors.email?.message}</ErrorBox>
        <Input
          {...register("username")}
          placeholder="Nazwa użytkownika"
          label="Nazwa użytkownika"
          type="text"
          classes={styles.form__input}
        />
        <ErrorBox>{errors.username?.message}</ErrorBox>
        <Input
          {...register("city")}
          placeholder="Miasto"
          label="Miasto"
          type="text"
          classes={styles.form__input}
        />
        <ErrorBox>{errors.city?.message}</ErrorBox>
        <Input
          {...register("phone")}
          placeholder="Numer telefonu"
          label="Numer telefonu"
          type="string"
          classes={styles.form__input}
        />
        <ErrorBox>{errors.phone?.message}</ErrorBox>
        <Input
          {...register("password")}
          type="password"
          placeholder="Hasło"
          label="Hasło"
          classes={styles.form__input}
        />
        <ErrorBox>{errors.password?.message}</ErrorBox>
        <Input
          {...register("confirmPassword")}
          type="password"
          placeholder="Powtórz hasło"
          label="Powtórz hasło"
          classes={styles.form__input}
        />
        <ErrorBox>{errors.confirmPassword?.message}</ErrorBox>
        {!isPrivateMode && (
          <>
            <Input
              {...register("business")}
              placeholder="Nazwa firmy"
              label="Nazwa firmy"
              type="text"
              classes={styles.form__input}
            />
            <ErrorBox>{errors.business?.message}</ErrorBox>
            <Input
              {...register("NIP")}
              placeholder="NIP"
              label="NIP"
              type="text"
              classes={styles.form__input}
            />
            <ErrorBox>{errors.NIP?.message}</ErrorBox>
          </>
        )}
        <div className={styles.form__separator} />
        <Button type="submit" onClick={() => {}}>
          Zarejestruj
        </Button>
        <Button type="button" onClick={changeTypeOfRegister}>
          Zarejestruj jako {!isPrivateMode ? "osoba prywatna" : "firma"}
        </Button>
      </form>
    </>
  );
};
