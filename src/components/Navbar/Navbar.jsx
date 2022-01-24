import styles from "./navbar.module.scss";
import { routes } from "../../routes/index";
import { Menu } from "./Menu";

const Hamburger = () => (
  <div className={styles.hamburger} id={styles.hamburger}>
    <span className={styles.line} />
    <span className={styles.line} />
    <span className={styles.line} />
  </div>
);

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Hamburger />
      <Menu list={routes} />
    </nav>
  );
};
