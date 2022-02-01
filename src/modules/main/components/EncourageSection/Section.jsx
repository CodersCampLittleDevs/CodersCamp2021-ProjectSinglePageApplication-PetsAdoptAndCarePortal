import PropTypes from "prop-types";
import styles from "./section.module.scss";

export const Section = ({ imageSrc, title, description, sectionSide }) => {
  return (
    <section
      className={
        sectionSide === "true" ? styles.section__right : styles.section__left
      }
    >
      <img
        className={
          sectionSide === "false"
            ? styles.section__image_right
            : styles.section__image_left
        }
        src={imageSrc}
        alt=""
      />
      <div className={styles.description}>
        <h3 className={styles.description__title}>{title}</h3>
        <p className={styles.description__text}>{description}</p>
      </div>
    </section>
  );
};

Section.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.objectOf(PropTypes.object).isRequired,
  sectionSide: PropTypes.string.isRequired,
};
