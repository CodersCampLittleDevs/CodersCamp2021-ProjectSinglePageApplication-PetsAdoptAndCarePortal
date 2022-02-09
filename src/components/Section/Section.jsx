import PropTypes from "prop-types";
import styles from "./section.module.scss";

export const Section = ({ children, imageSide }) => {
  return (
    <div
      className={
        imageSide ? styles.wrapper__right_side : styles.wrapper__left_side
      }
    >
      {children}
    </div>
  );

Section.propTypes = {
  children: PropTypes.node.isRequired,
  imageSide: PropTypes.bool.isRequired,
};
