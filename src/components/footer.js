import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} alt="logo" />
      <section className={styles.column}>
        <header className={styles.header}>O nas</header>
        <a href="/" className={styles.link}>
          Nasza misja
        </a>
        <a href="/" className={styles.link}>
          Kontakt
        </a>
        <a href="/" className={styles.link}>
          Regulamin
        </a>
      </section>
      <section className={styles.column}>
        <header className={styles.header}>Wyszukaj</header>
        <a href="/" className={styles.link}>
          Adopcje
        </a>
        <a href="/" className={styles.link}>
          Hotele
        </a>
        <a href="/" className={styles.link}>
          Usługi dla zwierząt
        </a>
      </section>
      <section className={styles.column}>
        <header className={styles.header}>Social Media</header>
      </section>
    </footer>
  );
};
