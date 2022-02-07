import { Services } from "../../constants/services";
import styles from "./servicesList.module.scss";

export const ServicesList = () => {
  return (
    <div className={styles.servicesSection}>
      {Services.map((service) => (
        <img className={styles.serviceItem} src={service} alt="usługa" />
      ))}
    </div>
  );
};
