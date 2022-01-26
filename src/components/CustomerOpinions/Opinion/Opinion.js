import propTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import styles from "./opinion.module.scss";

export const Opinion = ({ rating, description, name, city }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.rating}>
          Ocena<span> </span>
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
  rating: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
  name: propTypes.string,
  city: propTypes.string,
};

Opinion.defaultProps = {
  name: "Anonim",
  city: "",
};
