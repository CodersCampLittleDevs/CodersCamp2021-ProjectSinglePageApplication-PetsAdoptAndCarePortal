import styles from "./encourage_section.module.scss";
import encourageSectionImage from "../../../../assets/image/encourages/encourage_section_image.png";
import { Section } from "../../../../components";

export const EncourageSection = () => {
  return (
    <Section imageSide="left" imageSrc={encourageSectionImage}>
      <div className={styles.section__description}>
        <h3 className={styles.description__title}>
          Wszystkie usługi w jednym miejscu!
        </h3>
        <div className={styles.description__text}>
          <p>
            Świadomość opiekunów w zakresie profilaktyki swoich zwierząt
            regularnie wzrasta. Próbując sprostać wymaganiom i ułatwić
            włascicielom czworonogów dostep do fachowej opieki oraz
            profesjonalnych usług, stworzyliśmy platformę{" "}
            <strong className={styles.description__text_bold}>
              PETS Adopt & Care.
            </strong>
          </p>
          <p>
            <strong className={styles.description__text_bold}>
              Załóż konto{" "}
            </strong>
            już dziś by cieszyć się nieograniczonym dostępem do szerokiego grona
            specjalistów i usług jakie oferuje nasz portal.
          </p>
          <p>
            <strong className={styles.description__text_bold}>
              PETS Adopt & Care{" "}
            </strong>
            to również świetny kanał promocji swojej firmy, a zarazem prosty
            sposób umawiania wizyt dla swoich podopiecznych.
          </p>
          <p>
            <strong className={styles.description__text_bold}>
              Zarejestruj swoją firmę{" "}
            </strong>
            aby dołaćzyć do naszego grona specjalistów i świadczyć usługi dla
            wszystkich miłośników zwierząt!
          </p>
        </div>
      </div>
    </Section>
  );
};
