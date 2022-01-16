import PropTypes from "prop-types";
import styles from "./EncourageSection.module.scss";

export const EncourageSection = ({ image, title, description }) => {
  return (
    <section className={styles.section}>
      <img className={styles.section__image} src={image} alt={image} />
      <div className={styles.description}>
        <h3 className={styles.description__title}>{title}</h3>
        <p className={styles.description__text}>{description}</p>
      </div>
    </section>
  );
};

EncourageSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
