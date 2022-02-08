import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./AnnouncementsList.module.scss";

export const AnnouncementsList = ({ filteredAnnouncements }) => {
  return (
    <ul>
      {filteredAnnouncements.map((e) => (
        <Link to={`/announcements/ ${+e.id}`}>
          <div className={styles.singleannouncement}>
            <h3>{e.title}</h3>
            <p>Cena: {e.price}</p>
          </div>
        </Link>
      ))}
    </ul>
  );
};
AnnouncementsList.propTypes = {
  filteredAnnouncements: PropTypes.arrayOf(PropTypes.object).isRequired,
};
