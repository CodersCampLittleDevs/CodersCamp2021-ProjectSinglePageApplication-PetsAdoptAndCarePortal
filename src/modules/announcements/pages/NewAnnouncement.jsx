import styles from "./newAnnouncement.module.scss";
import { Box } from "../../../components/Box/Box";
import NewAnnouncementForm from "../components/NewAnnouncementForm/NewAnnouncementForm";

export const NewAnnouncement = () => {
  return (
    <section>
      <h2 className={styles.newAnnouncement__title}>Dodaj nowe ogłoszenie</h2>
      <div className={styles.newAnnouncement__content}>
        <Box>
          <NewAnnouncementForm />
        </Box>
      </div>
    </section>
  );
};
