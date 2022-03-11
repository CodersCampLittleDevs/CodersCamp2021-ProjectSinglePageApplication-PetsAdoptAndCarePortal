import PropTypes from "prop-types";
import styles from "./box.module.scss";

export const Box = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
};
