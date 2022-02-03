import PropTypes from "prop-types";
import styles from "./stepitem.module.scss";

export const StepByStepItem = ({ description, description2, image, alt }) => {
  return (
    <div className={styles.stepitem}>
      <img src={image} alt={alt} />
      <h3>
        {description}
        <br />
        {description2}
      </h3>
    </div>
  );
};
StepByStepItem.propTypes = {
  description: PropTypes.string.isRequired,
  description2: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
