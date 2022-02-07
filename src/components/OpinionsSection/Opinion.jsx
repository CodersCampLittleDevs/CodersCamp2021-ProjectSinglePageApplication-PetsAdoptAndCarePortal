import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import styles from "./opinion.module.scss";

export const Opinion = ({ rating, description, name, city }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.rating}>
          <span>Ocena </span>
          {rating}
          /5
        </div>
        <div className={styles.estimation}>
          <ReactStars
            size={12}
            value={rating}
            edit={false}
            activeColor="rgba(240, 140, 62, 1)"
          />
        </div>
      </header>
      <p className={styles.description}>{description}</p>
      <footer className={styles.footer}>
        {name}, {city}
      </footer>
    </div>
  );
};

Opinion.propTypes = {
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string,
  city: PropTypes.string,
};

Opinion.defaultProps = {
  name: "Anonim",
  city: "",
};
