import PropTypes from "prop-types";

export const Checkbox = ({
  id,
  label,
  value,
  name,
  register,
  classes,
  onClick,
  isActiveClass,
}) => {
  return (
    <label htmlFor={id} className={`${classes} ${isActiveClass}`}>
      <span>{label}</span>
      <input
        type="checkbox"
        id={id}
        value={value}
        name={name}
        {...register(name)}
        onClick={onClick}
      />
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  isActiveClass: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired,
};
Checkbox.defaultProps = {
  classes: "",
  onClick: () => {},
};
