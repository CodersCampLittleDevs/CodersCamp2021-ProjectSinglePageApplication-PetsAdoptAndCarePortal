import PropTypes from "prop-types";
import styles from "./AnnouncementItem.module.scss";

export const AnnouncementItem = ({ posts }) => {
  return (
    <>
      {posts.map((item) => {
        return (
          <div key={item.id} className={styles.wrapper}>
            <h2 className={styles.title}>{item.title}</h2>
            <img className={styles.image} src={item.image} alt="" />
            <p className={styles.description}>{item.description}</p>
            <p>{`Cena: ${item.price}`}</p>
          </div>
        );
      })}
    </>
  );
};

AnnouncementItem.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
