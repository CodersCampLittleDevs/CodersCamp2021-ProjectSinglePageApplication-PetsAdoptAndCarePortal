import { SERVICES } from "../../constants/services";
import styles from "./servicesList.module.scss";

export const ServicesList = () => {
  return (
    <div className={styles.services_section}>
      {SERVICES.map((service) => (
        <img
          className={styles.service_item}
          key={service}
          src={service}
          alt="usługa"
        />
      ))}
    </div>
  );
};
