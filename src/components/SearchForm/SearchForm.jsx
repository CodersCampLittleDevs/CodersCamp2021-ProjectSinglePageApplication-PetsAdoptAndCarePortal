import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Select } from "../Select/Select";
import { DataList } from "../DataList/DataList";
import { Input } from "../Input/Input";
import { SERVICES, CATEGORIES, CITIES, PETS } from "../../constants/options";
import styles from "./search_form.module.scss";
import { Button } from "../Button/Button";
import searchButtonIcon from "../../assets/image/searchButton.png";

export const SearchForm = ({ filterAnnouncements }) => {
  const [filterState, setFilterState] = useState([]);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const params = new URLSearchParams();
    params.set("phrase", data.Phrase);
    params.set("category", data.Category);
    params.set("city", data.City);
    if (data.Animals) {
      data.Animals.map((animal) => {
        params.append("animal", animal);
        return true;
      });
    }
    history.push({
      pathname: "/announcements",
      search: params.toString(),
    });
    filterAnnouncements({
      Phrase: data.Phrase,
      Category: data.Category,
      City: data.City,
      Animals: data.Animals,
    });
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
          <Input
            key={pet}
            id={pet}
            label={pet}
            type="checkbox"
            value={pet}
            {...register(PETS.title)}
            classes={styles.searchFilter__checkbox}
            onClick={() => toggleBadgeActive(pet)}
            isActiveClass={
              filterState.includes(pet) && styles.searchFilter__checkbox_active
            }
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
};

SearchForm.defaultProps = {
  filterAnnouncements: () => {},
};
