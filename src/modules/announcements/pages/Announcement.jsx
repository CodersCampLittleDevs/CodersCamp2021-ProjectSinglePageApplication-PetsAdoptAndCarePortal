import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import styles from "../components/Announcement/Announcement.module.scss";
import SampleUser from "../../../assets/image/SampleUser/SampleUser.png";
import { useAnnoucement } from "../hook/useAnnouncement";

const ANNOUNCEMENT_ROUTE = "/announcements/user/";

export const Announcement = () => {
  const { announcement, user } = useAnnoucement();
  const [phoneNumber, setPhoneNumber] = useState("XxX xXx XxX");

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
            <Link to={`${ANNOUNCEMENT_ROUTE}${announcement.userId}`}>
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
