import PropTypes from "prop-types";

export const DataList = ({ list }) => {
  return (
    <div>
      <input list="list-items" type="text" placeholder="Szukaj..." />

      <datalist id="list-items">
        {list.map((item) => (
          <option key={item} aria-label="list-items" value={item} />
        ))}
      </datalist>
    </div>
  );
};

DataList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};
