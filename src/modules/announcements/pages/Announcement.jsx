import { useParams, Link } from "react-router-dom";
import { ANNOUNCEMENTS_LIST } from "../../../constants/announcements/announcements";
import { USERS_LIST } from "../../../constants/users/users";
import { Button } from "../../../components/Button/Button";

import styles from "../components/Announcement/Announcement.module.scss";

export const Announcement = () => {
  const announcementId = useParams().id;
  const announcement = ANNOUNCEMENTS_LIST.filter(
    (announcementItem) => +announcementId === announcementItem.id,
  )[0];
  const user = USERS_LIST.filter(
    (userItem) => userItem.id === announcement.userId,
  )[0];
  return (
    <section className={styles.announcement}>
      <div className={styles.announcement__image}>
        <img src={announcement.image} alt={announcement.title} />
      </div>
      <div className={styles.announcement__contactContainer}>
        <div className={styles.announcement__contact}>
          <p>{user.name}</p>
          <img src={user.image} alt="" />
          {announcement.company && (
            <>
              <p>{announcement.company}</p>
              <p>Otwarte w godzinach {announcement.openHours}</p>
            </>
          )}
          <Link to={`/announcements/user/${announcement.userId}`}>
            Więcej od tego ogłoszeniodawcy
          </Link>
          <p className={styles.annoucemenet__phoneNumber}>
            {announcement.phoneNumber}
          </p>
          <Button type="button">Pokaż numer telefonu</Button>
        </div>
      </div>
      <div className={styles.announcement__details}>
        <h1 className={styles.announcement__title}>{announcement.title}</h1>
        <p className={styles.announcement__price}>{announcement.price}</p>
        <p className={styles.announcement__rate}>
          Ocena ogłoszenia: {announcement.rate}
        </p>
        <h2>Opis</h2>
        <p className={styles.annoucemenet__description}>
          {announcement.description}
        </p>
      </div>
    </section>
  );
};
