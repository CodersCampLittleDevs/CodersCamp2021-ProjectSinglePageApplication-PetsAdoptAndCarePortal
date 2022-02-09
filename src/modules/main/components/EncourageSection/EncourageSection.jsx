import styles from "./encourage_section.module.scss";
import dog from "../../../../assets/image/encourages/dog.png";
import { Section } from "../../../../components";

export const EncourageSection = () => {
  return (
    <Section>
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
      <img className={styles.section__image} src={dog} alt="" />
    </Section>
  );
};
