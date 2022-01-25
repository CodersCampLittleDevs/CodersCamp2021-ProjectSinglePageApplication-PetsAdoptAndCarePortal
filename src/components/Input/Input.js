import PropTypes from "prop-types";

export const Input = ({
  id,
  label,
  name,
  register,
  classes,
  onClick,
  inputRef,
  required,
}) => {
  return (
    <label htmlFor={id} className={classes}>
      <span>{label}</span>
      <input
        type="text"
        id={id}
        name={name}
        {...register(name, { required })}
        onClick={onClick}
        ref={inputRef}
      />
    </label>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  required: PropTypes.bool,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
Input.defaultProps = {
  classes: "",
  onClick: () => {},
  inputRef: () => {},
  required: false,
};
