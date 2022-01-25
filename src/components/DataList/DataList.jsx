import PropTypes from "prop-types";

export const DataList = ({ list, register, required }) => {
  return (
    <>
      <input
        {...register(list.title, { required })}
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
};

DataList.propTypes = {
  list: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  ).isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

DataList.defaultProps = {
  required: false,
};
