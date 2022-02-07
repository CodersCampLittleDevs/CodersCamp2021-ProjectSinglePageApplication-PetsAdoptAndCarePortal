import image1 from "./images/Group 46.png";
import image2 from "./images/Group 45.png";
import image3 from "./images/Group 44.png";
import image4 from "./images/Group 43.png";
import image5 from "./images/Group 42.png";
import image6 from "./images/Group 41.png";
import styles from "./servicesList.module.scss";

const Services = [image1, image2, image3, image4, image5, image6];

export const ServicesList = () => {
  return (
    <div className={styles.servicesSection}>
      {Services.map((service) => (
        <img className={styles.serviceItem} src={service} alt="usługa" />
      ))}
    </div>
  );
};
