import { StepByStepItem } from "./StepItem";
import styles from "./stepitem.module.scss";
import step1 from "./images/step1.png";
import step2 from "./images/step2.png";
import step3 from "./images/step3.png";

const STEPS = [
  {
    title: "Krok 1:",
    description: "Skorzystaj z naszej",
    description2: "wyszukiwarki",
    image: step1,
    alt: "step1",
  },
  {
    title: "Krok 2:",
    description: "Znajdź placówkę w Twojej",
    description2: "okolicy",
    image: step2,
    alt: "step2",
  },
  {
    title: "Krok 3:",
    description: "Wygodnie umów wizytę przez ",
    description2: "internet lub telefon",
    image: step3,
    alt: "step3",
  },
];
export const StepByStepList = () => (
  <div className={styles.step}>
    <h2>W prosty i łatwy sposób wyszukasz interesujące Cię usługi</h2>
    <div className={styles.steplist}>
      {STEPS.map((step) => (
        <StepByStepItem
          title={step.title}
          description={step.description}
          description2={step.description2}
          image={step.image}
          key={step.title}
          alt={step.alt}
        />
      ))}
    </div>
  </div>
);