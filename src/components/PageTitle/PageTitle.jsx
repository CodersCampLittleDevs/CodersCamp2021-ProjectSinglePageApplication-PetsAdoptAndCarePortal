import PropTypes from "prop-types";
import styles from "./page_title.module.scss";

export const PageTitle = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
