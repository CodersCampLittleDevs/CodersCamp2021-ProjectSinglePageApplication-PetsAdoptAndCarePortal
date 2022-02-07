import { StepByStepItem } from "./StepItem";
import styles from "./stepitem.module.scss";
import { STEPS } from "../../constants/steps";

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
