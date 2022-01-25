import PropTypes from "prop-types";

export const Select = ({ list, register, required }) => (
  <select
    id={list.title}
    name={list.title}
    {...register(list.title, { required })}
  >
    <option value="">{list.placeholder}</option>
    {list.items.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  list: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  ).isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Select.defaultProps = {
  required: false,
};
