import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Button/Button";
import { CheckboxSelect } from "../../../components/FormElements/CheckboxSelect/CheckboxSelect";
import Select from "../../../components/FormElements/Select/Select";

import { ANIMALS_LIST, CATEGORY_LIST } from "../../../constants/form/form";

export const SearchFilter = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select register={register} list={CATEGORY_LIST} />
      <CheckboxSelect register={register} list={ANIMALS_LIST} />
      <Button type="submit">Prześlij</Button>
    </form>
  );
};
