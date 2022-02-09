import PropTypes from "prop-types";
import styles from "./errorBox.module.scss";

export const ErrorBox = ({ error }) => {
  return <span className={styles.error}>{error}</span>;
};

ErrorBox.propTypes = {
  error: PropTypes.string.isRequired,
};
