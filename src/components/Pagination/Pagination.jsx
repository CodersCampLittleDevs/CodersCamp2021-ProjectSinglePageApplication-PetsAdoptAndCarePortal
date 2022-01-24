import PropTypes from "prop-types";
import { loopThroughPageNumbers } from "../../utils/loopThroughPageNumbers";
import styles from "./Pagination.module.scss";

export const Pagination = ({ totalPosts, paginate }) => {
  const pages = loopThroughPageNumbers(totalPosts);

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
