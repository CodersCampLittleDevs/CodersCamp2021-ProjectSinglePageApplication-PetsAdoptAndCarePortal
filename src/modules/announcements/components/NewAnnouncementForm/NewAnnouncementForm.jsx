import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import { Input, Button, Select, ErrorBox } from "../../../../components";
import styles from "../../../auth/components/Form/form.module.scss";
import { CATEGORIES, PETS } from "../../../../constants/options";
import { ANNOUNCEMENTS_LIST } from "../../../../constants/announcements";
import { clearFormAfterSubmit } from "../../../../utils/clearFormAfterSubmit";

const NewAnnouncementForm = () => {
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Podaj tytuł ogłoszenia")
      .max(25, "Maksymalnie 25 znaków"),
    description: yup
      .string()
      .required("Podaj opis ogłoszenia")
      .max(50, "Maksymalnie 50 znaków"),
    price: yup
      .string()
      .required("Podaj cenę ogłoszenia")
      .matches(/^[0-9]+$/, "Cena musi posiadać tylko cyfry")
      .min(1, "Numer musi posiadać minimum 1 znak")
      .max(10, "Numer musi posiadać maksymalnie 10 znaków"),
    category: yup.string().required("Wybierz kategorię ogłoszenia"),
    animal: yup.string().required("Wybierz zwierzę"),
    city: yup
      .string()
      .required("Podaj miasto")
      .max(20, "Maksymalnie 20 znaków"),
  });

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = ({
    title,
    description,
    price,
    category,
    animal,
    city,
  }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const ID = ANNOUNCEMENTS_LIST[ANNOUNCEMENTS_LIST.length - 1].id + 1;
    ANNOUNCEMENTS_LIST.push({
      id: ID,
      title,
      description,
      price,
      category,
      animal,
      city,
      userId: user.id,
      username: user.username,
      company: user.business,
      rate: 0.0,
    });
    console.log(ANNOUNCEMENTS_LIST);
    clearFormAfterSubmit(getValues, setValue);
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className={clsx([styles.form__new, styles.form])}
    >
      <Input
        {...register("title")}
        placeholder="Tytuł"
        label="Tytuł"
        type="text"
        classes={" "}
      />
      <ErrorBox>{errors.title?.message}</ErrorBox>
      <Input
        {...register("description")}
        placeholder="Opis"
        label="Opis"
        type="text"
        classes={" "}
      />
      <ErrorBox>{errors.description?.message}</ErrorBox>
      <Input
        {...register("price")}
        placeholder="Cena"
        label="Cena"
        type="text"
        classes={" "}
      />
      <ErrorBox>{errors.price?.message}</ErrorBox>
      <Select
        {...register("category", { required: true })}
        required
        list={CATEGORIES}
        fullWidth
      />
      <ErrorBox>{errors.category?.message}</ErrorBox>
      <Select
        {...register("animal", { required: true })}
        required
        list={PETS}
        fullWidth
      />
      <ErrorBox>{errors.animal?.message}</ErrorBox>
      <Input
        {...register("city")}
        placeholder="Miasto"
        label="Miasto"
        type="text"
        classes={" "}
      />
      <ErrorBox>{errors.city?.message}</ErrorBox>
      <div className={styles.form__separator}> </div>
      <Button type="submit" onClick={() => {}}>
        Dodaj ogłoszenie
      </Button>
    </form>
  );
};

export default NewAnnouncementForm;
