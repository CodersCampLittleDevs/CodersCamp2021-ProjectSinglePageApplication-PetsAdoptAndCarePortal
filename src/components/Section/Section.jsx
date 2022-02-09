import PropTypes from "prop-types";
import styles from "./section.module.scss";

export const Section = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
