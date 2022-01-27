import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, formSubmit } from "./RegisterForm";

import { Button } from "../../../../../components/Button/Button";
import { Input } from "../../../../../components/Input/Input";
import styles from "../form.module.scss";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isPrivateMode, setIsPrivateMode] = useState(true);
  const changeTypeOfRegister = () => {
    setIsPrivateMode((prevState) => !prevState);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
      <Input
        {...register("email")}
        placeholder="E-mail"
        label="E-mail"
        type="text"
        classes={styles.form__input}
      />
      <span className={styles.form__error}>{errors.email?.message}</span>
      <Input
        {...register("username")}
        placeholder="Nazwa użytkownika"
        label="Nazwa użytkownika"
        type="text"
        classes={styles.form__input}
      />
      <span className={styles.form__error}>{errors.username?.message}</span>
      <Input
        {...register("city")}
        placeholder="Miasto"
        label="Miasto"
        type="text"
        classes={styles.form__input}
      />
      <span className={styles.form__error}>{errors.city?.message}</span>
      <Input
        {...register("phone")}
        placeholder="Numer telefonu"
        label="Numer telefonu"
        type="string"
        classes={styles.form__input}
      />
      <span className={styles.form__error}>{errors.phone?.message}</span>
      <Input
        {...register("password")}
        type="password"
        placeholder="Hasło"
        label="Hasło"
        classes={styles.form__input}
      />
      <span className={styles.form__error}>{errors.password?.message}</span>
      <Input
        {...register("confirmPassword")}
        type="password"
        placeholder="Hasło"
        label="Powtórz hasło"
        classes={styles.form__input}
      />
      <p className={styles.form__error}>{errors.confirmPassword?.message}</p>
      {!isPrivateMode && (
        <>
          <Input
            {...register("business")}
            placeholder="Nazwa firmy"
            label="Nazwa firmy"
            type="text"
            classes={styles.form__input}
          />
          <span className={styles.form__error}>{errors.business?.message}</span>
          <Input
            {...register("NIP")}
            placeholder="NIP"
            label="NIP"
            type="text"
            classes={styles.form__input}
          />
          <span className={styles.form__error}>{errors.NIP?.message}</span>
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
