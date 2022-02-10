import styles from "./newAnnouncement.module.scss";
import { Box, PageTitle } from "../../../components";
import NewAnnouncementForm from "../components/NewAnnouncementForm/NewAnnouncementForm";

export const NewAnnouncement = () => {
  return (
    <section>
      <PageTitle>Dodaj nowe ogłoszenie</PageTitle>
      <div className={styles.newAnnouncement__content}>
        <Box>
          <NewAnnouncementForm />
        </Box>
      </div>
    </section>
  );
};
