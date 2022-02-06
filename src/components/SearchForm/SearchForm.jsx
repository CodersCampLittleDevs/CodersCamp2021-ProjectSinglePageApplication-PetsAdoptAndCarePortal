import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Select } from "../Select/Select";
import { DataList } from "../DataList/DataList";
import { Checkbox } from "../Checkbox/Checkbox";
import { SERVICES, CATEGORIES, CITIES, PETS } from "../../constants/options";
import styles from "./search_form.module.scss";
import { Button } from "../Button/Button";
import searchButtonIcon from "../../assets/image/searchButton.png";
import { createSearchParamsString } from "../../utils/createSearchParamString";

export const SearchForm = ({ filterAnnouncements, setFilters }) => {
  const [filterState, setFilterState] = useState([]);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const params = createSearchParamsString(data);
    history.push({
      pathname: "/announcements",
      search: params,
    });
    const announcements = filterAnnouncements({
      Phrase: data.Phrase,
      Category: data.Category,
      City: data.City,
      Animals: data.Animals,
    });
    setFilters(announcements);
  };

  const toggleBadgeActive = (name) => {
    if (!filterState.includes(name)) {
      setFilterState([...filterState, name]);
    } else {
      const newFilterState = [...filterState];
      newFilterState.splice(newFilterState.indexOf(name), 1);
      setFilterState(newFilterState);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.searchFilter__top}>
        {PETS.items.map((pet) => (
          <Checkbox
            key={pet}
            id={pet}
            label={pet}
            value={pet}
            name={PETS.title}
            register={register}
            classes={clsx({
              [styles.searchFilter__checkbox]: true,
              [styles.searchFilter__checkbox_active]: filterState.includes(pet),
            })}
            onClick={() => toggleBadgeActive(pet)}
          />
        ))}
      </div>
      <div className={styles.searchFilter__bottom}>
        <label htmlFor={SERVICES.title} className={styles.label}>
          <DataList
            {...register(SERVICES.title, { required: true })}
            list={SERVICES}
          />
          {errors[SERVICES.title] && (
            <span className={styles.error}>Wpisz czego szukasz</span>
          )}
        </label>
        <label htmlFor={CATEGORIES.title} className={styles.label}>
          <Select
            {...register(CATEGORIES.title, { required: true })}
            required
            list={CATEGORIES}
          />
          {errors[CATEGORIES.title] && (
            <span className={styles.error}>
              Wybierz kategorię której szukasz
            </span>
          )}
        </label>
        <label htmlFor={CITIES.title} className={styles.label}>
          <DataList
            {...register(CITIES.title, { required: true })}
            required
            list={CITIES}
          />
          {errors[CITIES.title] && (
            <span className={styles.error}>Wpisz czego szukasz</span>
          )}
        </label>
        <Button
          type="submit"
          classes={styles.searchFilter__button}
          onClick={() => {}}
        >
          <img src={searchButtonIcon} alt="" />
        </Button>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  filterAnnouncements: PropTypes.func,
  setFilters: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  filterAnnouncements: () => {},
};
