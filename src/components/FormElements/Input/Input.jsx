import propTypes from "prop-types";

export const Input = ({ register, id, type, placeholder }) => {
  return (
    <input id={id} type={type} placeholder={placeholder} {...register(id)} />
  );
};

Input.propTypes = {
  register: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
};
