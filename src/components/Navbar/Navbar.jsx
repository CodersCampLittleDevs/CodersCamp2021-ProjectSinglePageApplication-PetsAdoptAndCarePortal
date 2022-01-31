import { useState } from "react";
import clsx from "clsx";
import styles from "./navbar.module.scss";
import { routes } from "../../routes/index";
import { Menu } from "./Menu";

let hamburgerClasses = styles.hamburger;

const Hamburger = () => {
  const [change, setChange] = useState(false);
  const hamburgerClick = () => {
    setChange(!change);
    if (change === false) {
      hamburgerClasses = clsx([styles.hamburger, styles.isActive]);
    } else {
      setChange(!change);
      hamburgerClasses = styles.hamburger;
    }
  };
  return (
    <button
      className={hamburgerClasses}
      id={styles.hamburger}
      onClick={hamburgerClick}
      onKeyDown={hamburgerClick}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  );
};
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Hamburger />
      <Menu className={styles.menu} list={routes} />
    </nav>
  );
};
