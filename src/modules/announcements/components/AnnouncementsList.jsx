import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./AnnouncementsList.module.scss";

export const AnnouncementsList = ({ filteredAnnouncements }) => {
  if (filteredAnnouncements.length === 0) {
    return (
      <p>
        Przeprazamy, niestety nie ma żadnych ogłoszeń spełniających kryteria
        Twoich wyszukiwań
      </p>
    );
  }
  return (
    <div className={styles.allAnnouncements}>
      <ul>
        {filteredAnnouncements.map((e) => (
          <li key={e.id}>
            <Link to={`/announcements/ ${+e.id}`}>
              <div className={styles.singleAnnouncement}>
                <h3 className={styles.name}>
                  {e.title}
                  <br />
                  {e.city}
                </h3>
                <p className={styles.description}>{e.description}</p>
                <div className={styles.rating}>
                  <ReactStars
                    size={34}
                    value={e.rate}
                    edit={false}
                    activeColor="rgba(240, 140, 62, 1)"
                  />
                </div>
                <h4 className={styles.setAppointment}>Umów wizytę</h4>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
AnnouncementsList.propTypes = {
  filteredAnnouncements: PropTypes.arrayOf(PropTypes.object).isRequired,
};
// RatingStars.propTypes = {
//   Rate: PropTypes.number,
// };
// RatingStars.defaultProps = {
//   Rate: 0,
// };
