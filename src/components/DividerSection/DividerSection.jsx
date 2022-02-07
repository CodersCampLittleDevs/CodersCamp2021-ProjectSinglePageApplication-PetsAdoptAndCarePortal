import styles from "./dividerSection.modules.scss";
import dogPhoto from "../../assets/image/photoBottom.png";

export const DividerSection = () => {
  return (
    <div className={styles.dividerSection}>
      <img className={styles.photo} src={dogPhoto} alt="buldog francuski" />
    </div>
  );
};
