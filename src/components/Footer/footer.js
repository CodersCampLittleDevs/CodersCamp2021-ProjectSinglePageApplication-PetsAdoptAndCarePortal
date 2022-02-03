import { BrowserRouter as Router, NavLink } from "react-router-dom";
import styles from "./footer.module.scss";
import logo from "../../assets/image/footer/Layer 2.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo_column}>
        <img className={styles.logo} src={logo} alt="logo" />
        <p className={styles.description}>
          Wszystkie usługi dla Twojego pupila w jednym miejscu.
        </p>
        <p>Copyright &copy; 2022</p>
      </div>
      <section className={styles.column}>
        <header className={styles.header}>Usługi dla zwierząt</header>
        <Router>
          <NavLink to="/" className={styles.link}>
            Weterynarz
          </NavLink>
          <NavLink to="/" className={styles.link}>
            Groomer
          </NavLink>
          <NavLink to="/" className={styles.link}>
            Trener
          </NavLink>
          <NavLink to="/" className={styles.link}>
            Behawiorysta
          </NavLink>
          <NavLink to="/" className={styles.link}>
            Hotel dla zwierząt
          </NavLink>
          <NavLink to="/" className={styles.link}>
            Sklep
          </NavLink>
        </Router>
      </section>
      <section className={styles.column}>
        <header className={styles.header}>Konto</header>
        <Router>
          <NavLink to="/" className={styles.link}>
            Zaloguj
          </NavLink>
          <NavLink to="/" className={styles.link}>
            Zarejestruj
          </NavLink>
          <div className={styles.break} />
          <NavLink to="/" className={styles.link}>
            Kontakt
          </NavLink>
          <NavLink to="/" className={styles.link}>
            Regulamin
          </NavLink>
          <NavLink to="/" className={styles.link}>
            Polityka prywatności
          </NavLink>
        </Router>
      </section>
    </footer>
  );
};
