import { forwardRef } from "react";
import PropTypes from "prop-types";

export const Input = forwardRef(
  ({ label, type, classes, placeholder, onChange, name, onBlur }, ref) => {
    return (
      <label htmlFor={name} className={classes}>
        <span>{label}</span>
        <input
          type={type}
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          name={name}
          ref={ref}
        />
      </label>
    );
  },
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
Input.defaultProps = {
  classes: "",
};
