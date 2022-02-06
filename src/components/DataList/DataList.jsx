import PropTypes from "prop-types";
import { forwardRef } from "react";

export const DataList = forwardRef(({ list, onChange, onBlur, name }, ref) => {
  return (
    <>
      <input
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        name={name}
        list={list.title}
        type="text"
        placeholder={list.placeholder}
      />

      <datalist id={list.title}>
        {list.items.map((item) => (
          <option key={item} aria-label={list.title} value={item} />
        ))}
      </datalist>
    </>
  );
});

DataList.propTypes = {
  list: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
