import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Select } from "../Select/Select";
import { DataList } from "../DataList/DataList";
import { Checkbox } from "../Checkbox/Checkbox";
import { SERVICES, CATEGORIES, CITIES, PETS } from "../../constants/options";
import styles from "./search_filter.module.scss";
import { Button } from "../Button/Button";
import searchButtonIcon from "../../assets/image/searchButton.png";

export const SearchFilter = ({ filterAnnouncements }) => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let animalsSearchParams = "";
    if (data.Animals) {
      data.Animals.map((animal) => {
        animalsSearchParams += `&animal=${animal}`;
        return true;
      });
    }
    history.push({
      pathname: "/announcements",
      search: `?phrase=${data.Phrase}&category=${data.Category}&city=${data.City}${animalsSearchParams}`,
    });
    filterAnnouncements({
      Phrase: encodeURIComponent(data.Phrase),
      Category: encodeURIComponent(data.Category),
      City: encodeURIComponent(data.City),
      Animals: data.Animals,
    });
  };

  const toggleBadgeActive = (e) => {
    const input = e.target;
    const label = input.parentElement;
    label.classList.toggle(styles.searchFilter__checkbox_active);
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
            classes={styles.searchFilter__checkbox}
            onClick={toggleBadgeActive}
          />
        ))}
      </div>
      <div className={styles.searchFilter__bottom}>
        <label htmlFor={SERVICES.title} className={styles.label}>
          <DataList register={register} required list={SERVICES} />
          {errors[SERVICES.title] && (
            <span className={styles.error}>Wpisz czego szukasz</span>
          )}
        </label>
        <label htmlFor={CATEGORIES.title} className={styles.label}>
          <Select register={register} required list={CATEGORIES} />
          {errors[CATEGORIES.title] && (
            <span className={styles.error}>
              Wybierz kategorię której szukasz
            </span>
          )}
        </label>
        <label htmlFor={CITIES.title} className={styles.label}>
          <DataList register={register} required list={CITIES} />
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

SearchFilter.propTypes = {
  filterAnnouncements: PropTypes.func,
};

SearchFilter.defaultProps = {
  filterAnnouncements: () => {},
};
