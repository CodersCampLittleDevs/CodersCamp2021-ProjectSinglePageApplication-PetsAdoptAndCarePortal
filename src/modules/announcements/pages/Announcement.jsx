import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { ANNOUNCEMENTS_LIST } from "../../../constants/announcements";
import { Button } from "../../../components/Button/Button";
import styles from "../components/Announcement/Announcement.module.scss";
import { DUMMY_LOGINS } from "../../../mock/auth";
import SampleUser from "../../../assets/image/SampleUser/SampleUser.png";

export const Announcement = () => {
  const [phoneNumber, setPhoneNumber] = useState("XxX xXx XxX");
  const announcementId = useParams().id;
  const announcement = ANNOUNCEMENTS_LIST.find(
    (announcementItem) => +announcementId === announcementItem.id,
  );
  const user = DUMMY_LOGINS.find(
    (userItem) => userItem.id === announcement.userId,
  );
  return (
    <div className={styles.centered__announcement}>
      <section className={styles.announcement}>
        <div className={styles.announcement__image}>
          <img src={announcement.image} alt={announcement.title} />
        </div>
        <div className={styles.announcement__contactContainer}>
          <div className={styles.announcement__contact}>
            <p>{user?.name}</p>
            <img src={user.image ? user.image : SampleUser} alt="" />
            {user.company && <p>{user.company}</p>}
            <Link to={`/announcements/user/${announcement.userId}`}>
              Więcej od tego ogłoszeniodawcy
            </Link>
            <p className={styles.annoucemenet__phoneNumber}>{phoneNumber}</p>
            <div className={styles.announcement__button}>
              <Button
                type="button"
                onClick={() => setPhoneNumber(user?.phoneNumber)}
              >
                Pokaż numer telefonu
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.announcement__details}>
          <h2 className={styles.announcement__title}>
            {announcement.title}
            <br />
            Cena: {announcement.price}
          </h2>
          <div className={styles.announcement__rate}>
            <p>Ocena ogłoszenia:</p>
            <ReactStars
              size={36}
              value={announcement.rate}
              edit={false}
              activeColor="rgba(240, 140, 62, 1)"
            />
          </div>
          <div className={styles.announcement__description}>
            <h3>Opis:</h3>
            <p>{announcement.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
