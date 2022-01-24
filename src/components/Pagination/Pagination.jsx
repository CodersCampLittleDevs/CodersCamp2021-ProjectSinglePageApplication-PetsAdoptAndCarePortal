import PropTypes from "prop-types";
import { createPageNumbers } from "../../utils/createPageNumbers";
import styles from "./pagination.module.scss";

export const Pagination = ({ totalPosts, paginate }) => {
  const pages = createPageNumbers(totalPosts);

  return (
    <nav className={styles.nav}>
      {pages.map((item) => {
        return (
          <button
            className={styles.nav__button}
            key={item}
            onClick={() => paginate(item)}
          >
            {item}
          </button>
        );
      })}
    </nav>
  );
};

Pagination.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
