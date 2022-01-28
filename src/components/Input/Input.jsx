import { forwardRef } from "react";
import PropTypes from "prop-types";

export const Input = forwardRef(
  (
    {
      id,
      label,
      type,
      value,
      onChange,
      onBlur,
      name,
      classes,
      onClick,
      isActiveClass,
    },
    ref,
  ) => {
    return (
      <label htmlFor={id} className={`${classes} ${isActiveClass}`}>
        <span>{label}</span>
        <input
          type={type}
          id={id}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          onClick={onClick}
        />
      </label>
    );
  },
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isActiveClass: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired,
};
Input.defaultProps = {
  classes: "",
  onClick: () => {},
};
