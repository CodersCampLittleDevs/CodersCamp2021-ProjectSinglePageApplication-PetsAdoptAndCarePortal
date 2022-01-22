import PropTypes from "prop-types";
import styles from "./Pagination.module.scss";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.nav}>
      {pageNumbers.map((item) => {
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
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
