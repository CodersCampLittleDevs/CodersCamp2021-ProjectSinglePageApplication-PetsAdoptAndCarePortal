import propTypes, { oneOfType } from "prop-types";

const Select = ({ register, list }) => {
  const selectOptions = list.elements.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  return (
    <select {...register(list.title)}>
      <option value="">Wybierz kategorię</option>
      {selectOptions}
    </select>
  );
};

export default Select;

Select.propTypes = {
  list: propTypes.objectOf(
    oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  ).isRequired,
  register: propTypes.func.isRequired,
};
