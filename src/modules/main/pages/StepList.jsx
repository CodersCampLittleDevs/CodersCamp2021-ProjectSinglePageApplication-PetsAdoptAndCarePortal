import { StepByStepItem } from "./StepItem";
import styles from "./stepitem.module.scss";

const STEPS = [
  {
    title: "Krok 1:",
    description: "Wpisz interesującą cię frazę w wyszukiwarkę",
    image: "ścieżka do img",
  },
  {
    title: "Krok 2:",
    description: "Wybierz zwierzę, którego fraza dotyczy",
    image: "ścieżka do img",
  },
  {
    title: "Krok 3:",
    description: "Znajdź interesujące Cię ogłoszenie",
    image: "ścieżka do img",
  },
  {
    title: "Krok 4:",
    description: "Skontaktuj się z ogłoszeniodawcą!",
    image: "ścieżka do img",
  },
];
export const StepByStepList = () => (
  <div className={styles.steplist}>
    {STEPS.map((step) => (
      <StepByStepItem
        key={step.title}
        title={step.title}
        description={step.description}
        image={step.image}
      />
    ))}
  </div>
);
