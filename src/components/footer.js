import { BrowserRouter as Router, NavLink } from "react-router-dom";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} alt="logo" />
      <section className={styles.column}>
        <header className={styles.header}>O nas</header>
        <Router>
          <NavLink to="/" className={styles.link}>
            Nasza misja
          </NavLink>
          <NavLink to="/" className={styles.link}>
            Kontakt
          </NavLink>
          <NavLink to="/" className={styles.link}>
            Regulamin
          </NavLink>
        </Router>
      </section>
      <section className={styles.column}>
        <header className={styles.header}>Wyszukaj</header>
        <Router>
          <NavLink to="/" className={styles.link}>
            Adopcje
          </NavLink>
          <NavLink to="/" className={styles.link}>
            Hotele
          </NavLink>
          <NavLink to="/" className={styles.link}>
            Usługi dla zwierząt
          </NavLink>
        </Router>
      </section>
      <section className={styles.column}>
        <header className={styles.header}>Social Media</header>
      </section>
    </footer>
  );
};
