import PropTypes from "prop-types";
import { forwardRef } from "react";
import clsx from "clsx";
import styles from "./select.module.scss";

export const Select = forwardRef(
  ({ list, onChange, onBlur, name, fullWidth }, ref) => (
    <select
      id={list.title}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      className={clsx(styles.select, { [styles.full_width]: fullWidth })}
    >
      <option value="">{list.placeholder}</option>
      {list.items.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  ),
);

Select.propTypes = {
  list: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool,
};
Select.defaultProps = {
  fullWidth: false,
};
