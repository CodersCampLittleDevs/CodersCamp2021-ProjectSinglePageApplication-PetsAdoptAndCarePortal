import PropTypes from "prop-types";

export const StepItem = ({ title, description, image, alt }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={image} alt={alt} />
    </div>
  );
};

StepItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
