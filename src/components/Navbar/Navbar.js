import styles from "./Navbar.module.scss";
import { routes } from "../../routes/index";
import { Menu } from "./Menu";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Menu list={routes} />
    </nav>
  );
};
