import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useState, useEffect } from "react";
import { Button, LoadingSpinner } from "../../../components";
import styles from "../components/Announcement/Announcement.module.scss";
import SampleUser from "../../../assets/image/SampleUser/SampleUser.png";
import dog from "../../../assets/image/encourages/encourage_section_image.png";
import { useHttpClient } from "../../../hooks/httpHook";

const ANNOUNCEMENT_ROUTE = "/announcements/user/";

export const Announcement = () => {
  const [phoneNumber, setPhoneNumber] = useState("XxX xXx XxX");
  const [announcement, setAnnouncement] = useState({});
  const [user, setUser] = useState({});
  const { isLoading, sendRequest } = useHttpClient();
  const { id } = useParams();
  useEffect(() => {
    const getAnnouncement = async () => {
      const newAnnouncement = await sendRequest(
        `http://localhost:8000/announcements/${id}`,
      );
      const newUser = await sendRequest(
        `http://localhost:8000/user/${newAnnouncement.user}`,
      );
      setAnnouncement(newAnnouncement);
      setUser(newUser);
    };
    getAnnouncement();
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <div className={styles.centered__announcement}>
          <section className={styles.announcement}>
            <div className={styles.announcement__image_section}>
              <img src={dog} alt={announcement.title} />
            </div>
            <div className={styles.announcement__contactContainer}>
              <div className={styles.announcement__contact}>
                <p>{user?.name}</p>
                <img src={user.image ? user.image : SampleUser} alt="" />
                {user.company && <p>{user.company}</p>}
                <Link to={`${ANNOUNCEMENT_ROUTE}${announcement.userId}`}>
                  Więcej od tego ogłoszeniodawcy
                </Link>
                <p className={styles.annoucemenet__phoneNumber}>
                  {phoneNumber}
                </p>
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
      )}
    </>
  );
};
