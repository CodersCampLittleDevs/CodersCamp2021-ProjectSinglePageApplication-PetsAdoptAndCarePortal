import propTypes from "prop-types";

export const Select = ({ list, register, required }) => (
  <select
    id={list.title}
    name={list.title}
    {...register(list.title, { required })}
  >
    <option value="">{list.title}</option>
    {list.items.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
);

Select.propTypes = {
  list: propTypes.objectOf(
    propTypes.oneOfType([propTypes.string, propTypes.array]),
  ).isRequired,
  register: propTypes.func.isRequired,
  required: propTypes.bool,
};

Select.defaultProps = {
  required: false,
};
