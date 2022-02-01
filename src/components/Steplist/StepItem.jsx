import PropTypes from "prop-types";
import styles from "./stepitem.module.scss";

export const StepByStepItem = ({ description, image, alt }) => {
  return (
    <div className={styles.stepitem}>
      <img src={image} alt={alt} />
      <h3>{description}</h3>
    </div>
  );
};
StepByStepItem.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  alt: PropTypes.string.isRequired,
};
