import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ANNOUNCEMENTS_LIST } from "../../../constants/announcements/announcements";
import { USERS_LIST } from "../../../constants/users/users";
import { Button } from "../../../components/Button/Button";
import styles from "../components/Announcement/Announcement.module.scss";

export const Announcement = () => {
  const [phoneNumber, setPhoneNumber] = useState("XxX xXx XxX");
  const announcementId = useParams().id;
  const announcement = ANNOUNCEMENTS_LIST.find(
    (announcementItem) => +announcementId === announcementItem.id,
  );
  const user = USERS_LIST.find(
    (userItem) => userItem.id === announcement.userId,
  );
  return (
    <section className={styles.announcement}>
      <div className={styles.announcement__image}>
        <img src={announcement.image} alt={announcement.title} />
      </div>
      <div className={styles.announcement__contactContainer}>
        <div className={styles.announcement__contact}>
          <p>{user?.name}</p>
          <img src={user?.image} alt="" />
          {user.company && (
            <>
              <p>{user.company}</p>
              <p>Otwarte w godzinach: {user.openHours}</p>
            </>
          )}
          <Link to={`/announcements/user/${announcement.userId}`}>
            Więcej od tego ogłoszeniodawcy
          </Link>
          <p className={styles.annoucemenet__phoneNumber}>{phoneNumber}</p>
          <Button
            type="button"
            onClick={() => setPhoneNumber(user?.phoneNumber)}
          >
            Pokaż numer telefonu
          </Button>
        </div>
      </div>
      <div className={styles.announcement__details}>
        <h2 className={styles.announcement__title}>{announcement.title}</h2>
        <p className={styles.announcement__price}>Cena: {announcement.price}</p>
        <p className={styles.announcement__rate}>
          Ocena ogłoszenia: {announcement.rate}
        </p>
        <h3>Opis</h3>
        <p className={styles.announcemenet__description}>
          {announcement.description}
        </p>
      </div>
    </section>
  );
};
