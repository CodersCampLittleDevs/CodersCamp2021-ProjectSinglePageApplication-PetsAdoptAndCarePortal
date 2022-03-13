import ReactStars from "react-rating-stars-component";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./announcements_list.module.scss";

const ANNOUNCEMENT_ROUTE = "/announcements/";
const AnnouncementListEmptyState = () => (
  <h3 className={styles.announcementNotFound}>
    Przepraszamy, niestety nie ma żadnych ogłoszeń spełniających kryteria Twoich
    wyszukiwań
  </h3>
);
export const AnnouncementsList = ({ filteredAnnouncements, isLoading }) => {
  if (!filteredAnnouncements.length && !isLoading) {
    return <AnnouncementListEmptyState />;
  }
  return (
    <div className={styles.allAnnouncements}>
      <ul className={styles.list}>
        {filteredAnnouncements.map((announcement) => (
          <li key={announcement["_id"]}>
            <Link to={`${ANNOUNCEMENT_ROUTE}${announcement["_id"]}`}>
              <div className={styles.singleAnnouncement}>
                <h3 className={styles.name}>
                  {announcement.company
                    ? announcement.company
                    : announcement.title}
                  <br />
                  {announcement.city}
                </h3>
                <p className={styles.description}>{announcement.description}</p>
                <div className={styles.rating}>
                  <ReactStars
                    size={34}
                    value={announcement.rate}
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
  isLoading: PropTypes.bool.isRequired,
};
