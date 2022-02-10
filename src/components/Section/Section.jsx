import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./section.module.scss";

export const Section = ({ children, imageSide, imageSrc }) => {
  const sectionClasses = clsx(styles.wrapper, {
    [styles.wrapper__left_side]: imageSide === "left",
    [styles.wrapper__right_side]: imageSide === "right",
  });
  return (
    <section className={sectionClasses}>
      {imageSrc && (
        <img className={styles.section__image} src={imageSrc} alt="" />
      )}
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  imageSide: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};
