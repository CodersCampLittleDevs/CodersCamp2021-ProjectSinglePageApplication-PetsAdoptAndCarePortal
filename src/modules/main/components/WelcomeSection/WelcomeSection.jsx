import styles from "./welcome_section.module.scss";
import welcomeSectionImage from "../../../../assets/image/encourages/encourage_image.png";
import { Section } from "../../../../components";

export const WelcomeSection = () => {
  return (
    <Section imageSide="right" imageSrc={welcomeSectionImage}>
      <div className={styles.section__description}>
        <h3 className={styles.description__title}>
          W trosce o potrzeby Twojego zwierzaka
        </h3>
        <p className={styles.description__text}>
          Kompleksowa wyszukiwarka usług dla zwierząt, która powstała z myślą o
          czworonogach i ich właścicielach, ułatwiając im dostęp do szerokiego
          grona specjalistów.
        </p>
      </div>
    </Section>
  );
};
