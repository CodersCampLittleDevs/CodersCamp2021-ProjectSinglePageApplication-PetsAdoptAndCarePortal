import propTypes from "prop-types";

export const Textarea = ({ id, rows, classes, placeholder }) => {
  return (
    <textarea
      className={classes}
      id={id}
      rows={rows || 3}
      placeholder={placeholder}
    />
  );
};

Textarea.propTypes = {
  id: propTypes.string.isRequired,
  rows: propTypes.number.isRequired,
  classes: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
};
