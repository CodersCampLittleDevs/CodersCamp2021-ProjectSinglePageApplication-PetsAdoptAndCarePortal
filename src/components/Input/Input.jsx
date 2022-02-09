import { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./input.module.scss";

export const Input = forwardRef(
  ({ type, placeholder, onChange, name, onBlur }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
        ref={ref}
        className={styles.input}
      />
    );
  },
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
