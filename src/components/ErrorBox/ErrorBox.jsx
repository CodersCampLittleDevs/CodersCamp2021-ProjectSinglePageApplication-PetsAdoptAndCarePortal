import PropTypes from "prop-types";
import styles from "./errorBox.module.scss";

export const ErrorBox = ({ children }) => {
  return <span className={styles.error}>{children}</span>;
};

ErrorBox.propTypes = {
  children: PropTypes.node.isRequired,
};
