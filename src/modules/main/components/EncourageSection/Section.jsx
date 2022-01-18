import PropTypes from "prop-types";
import styles from "./section.module.scss";

export const EncourageSection = ({ imageSrc, title, description }) => {
  return (
    <section className={styles.section}>
      <img className={styles.section__image} src={imageSrc} alt="" />
      <div className={styles.description}>
        <h3 className={styles.description__title}>{title}</h3>
        <p className={styles.description__text}>{description}</p>
      </div>
    </section>
  );
};

EncourageSection.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
