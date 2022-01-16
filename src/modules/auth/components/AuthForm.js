import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button/Button";

export const AuthForm = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button type="submit">Prześlij</Button>
    </form>
  );
};
