import React from "react";
import Logo from "../logo/Logo";
import { MenuItems } from "./MenuItems";
import styles from "./Navbar.module.scss";

// import * as FaIcons from "react-icons/fa";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles["navbar__logo-container"]}`}>
        <Logo classX={`${styles.navbar__logo}`} />
      </div>

      <ul className={styles.navbar__items}>
        {MenuItems.map((item, inx) => {
          return (
            <li keys={inx}>
              <a className={styles.navbar__links} href={item.url}>
                {item.icon}
                <span className={styles.navbar__span}>{item.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
