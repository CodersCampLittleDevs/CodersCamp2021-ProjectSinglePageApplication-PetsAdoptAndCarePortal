import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} alt="logo" />
      <section className={styles.column}>
        <heading className={styles.heading}>O nas</heading>
        <ul className={styles.list}>
          <li className={styles.link}>Nasza misja</li>
          <li className={styles.link}>Kontakt</li>
          <li className={styles.link}>Regulamin</li>
        </ul>
      </section>
      <section className={styles.column}>
        <heading className={styles.heading}>Wyszukaj</heading>
        <ul className={styles.list}>
          <li className={styles.link}>Adopcje</li>
          <li className={styles.link}>Hotele</li>
          <li className={styles.link}>Usługi dla zwierząt</li>
        </ul>
      </section>
      <section className={styles.column}>
        <heading className={styles.heading}>Social Media</heading>
      </section>
    </footer>
  );
};
