import { useState } from "react";
import propTypes from "prop-types";
import { FaArrowDown } from "react-icons/fa";
import styles from "./CheckboxSelect.module.scss";
import { Button } from "../../Button/Button";

export const CheckboxSelect = ({ register, list }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const CATEGORIES = list.elements.map((animal) => (
    <label key={animal} htmlFor={animal}>
      <input
        {...register(animal)}
        type="checkbox"
        value={`${animal}-animal`}
        id={animal}
        name={animal}
      />
      {animal}
    </label>
  ));

  const openList = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const DROPDOWN_CLASSES = `${styles.checkboxSelect__list} ${
    isDropdownVisible ? styles.checkboxSelect__show : ""
  }`;

  return (
    <div className={styles.checkboxSelect__title}>
      <Button type="button" onClick={openList}>
        <span>{list.title}</span>
        <FaArrowDown />
      </Button>
      <div className={DROPDOWN_CLASSES}>{CATEGORIES}</div>
    </div>
  );
};

CheckboxSelect.propTypes = {
  list: propTypes.objectOf(
    propTypes.oneOfType([
      propTypes.string,
      propTypes.arrayOf(propTypes.string),
    ]),
  ).isRequired,
  register: propTypes.func.isRequired,
};
