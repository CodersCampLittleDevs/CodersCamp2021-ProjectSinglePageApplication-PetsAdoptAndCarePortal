import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Select = forwardRef(({ list, onChange, onBlur, name }, ref) => (
  <select
    id={list.title}
    ref={ref}
    onChange={onChange}
    onBlur={onBlur}
    name={name}
  >
    <option value="">{list.placeholder}</option>
    {list.items.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
));

Select.propTypes = {
  list: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
