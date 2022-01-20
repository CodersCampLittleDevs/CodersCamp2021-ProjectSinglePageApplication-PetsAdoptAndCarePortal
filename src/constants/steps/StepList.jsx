import { StepItem } from "../../modules/main/pages/StepItem";
import styles from "../../modules/main/pages/stepitem.module.scss";

const STEPS = [
  {
    title: "Krok 1:",
    description: "Wpisz interesującą cię frazę w wyszukiwarkę",
    image: "ścieżka do img",
    alt: "opis zdjęcia",
  },
  {
    title: "Krok 2:",
    description: "Wybierz zwierzę, którego fraza dotyczy",
    image: "ścieżka do img",
    alt: "opis zdjęcia",
  },
  {
    title: "Krok 3:",
    description: "Znajdź interesujące Cię ogłoszenie",
    image: "ścieżka do img",
    alt: "opis zdjęcia",
  },
  {
    title: "Krok 4:",
    description: "Skontaktuj się z ogłoszeniodawcą!",
    image: "ścieżka do img",
    alt: "opis zdjęcia",
  },
];
export const StepsList = () => (
  <div className={styles.steps__list}>
    {STEPS.map((step) => (
      <StepItem
        title={step.title}
        description={step.description}
        image={step.image}
        alt={step.alt}
      />
    ))}
  </div>
);
