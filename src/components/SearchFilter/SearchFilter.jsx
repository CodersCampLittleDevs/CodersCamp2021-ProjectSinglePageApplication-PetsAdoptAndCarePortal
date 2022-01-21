import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Select } from "../Select/Select";
import { DataList } from "../DataList/DataList";
import { SERVICES, DATALIST, PETS } from "../../constants/SearchOptions";
import AnnouncementsContext from "../../context/announcements/announcements-context";
import styles from "./SearchFilter.module.scss";

export const SearchFilter = () => {
  const history = useHistory();
  const announcementsCtx = useContext(AnnouncementsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    announcementsCtx.filter(data);
    if (window.location.pathname === "/") {
      history.push({
        pathname: "/announcements",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor={DATALIST.title} className={styles.label}>
        <DataList register={register} required list={DATALIST} />
        {errors[DATALIST.title] && (
          <span className={styles.error}>Wpisz czego szukasz</span>
        )}
      </label>
      <label htmlFor={SERVICES.title} className={styles.label}>
        <Select register={register} required list={SERVICES} />
        {errors[SERVICES.title] && (
          <span className={styles.error}>Wybierz kategorię której szukasz</span>
        )}
      </label>
      <label htmlFor={PETS.title} className={styles.label}>
        <Select register={register} required list={PETS} />
        {errors[PETS.title] && (
          <span className={styles.error}>Wybierz zwierzę którego szukasz</span>
        )}
      </label>
      <input type="submit" />
    </form>
  );
};
