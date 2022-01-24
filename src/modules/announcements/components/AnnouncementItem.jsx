import PropTypes from "prop-types";
import styles from "./announcement_item.module.scss";

export const AnnouncementItem = ({ title, imageSrc, description, price }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <img className={styles.image} src={imageSrc} alt="" />
      <p className={styles.description}>{description}</p>
      <p>{`Cena: ${price}`}</p>
    </div>
  );
};

AnnouncementItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
