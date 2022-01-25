import PropTypes from "prop-types";

export const Input = ({
  id,
  label,
  type,
  value,
  name,
  register,
  classes,
  onClick,
}) => {
  return (
    <label htmlFor={id} className={classes}>
      <span>{label}</span>
      <input
        type={type}
        id={id}
        value={value}
        name={name}
        {...register(name)}
        onClick={onClick}
      />
    </label>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};
Input.defaultProps = {
  classes: "",
  onClick: () => {},
};
