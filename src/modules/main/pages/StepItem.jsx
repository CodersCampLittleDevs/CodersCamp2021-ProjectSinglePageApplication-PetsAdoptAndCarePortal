import PropTypes from "prop-types";

export const StepByStepItem = ({ title, description, image }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <img alt={image} />
    </div>
  );
};
StepByStepItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
