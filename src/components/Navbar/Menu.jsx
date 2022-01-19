import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { MenuItem } from "./MenuItem";
import { Logo } from "../../assets/logo/Logo";

export const Menu = ({ list }) => {
  const logo = list.filter((element) => element.logo === true);
  const leftMenu = list.filter((element) => element.left === true);
  const rightMenu = list.filter((element) => element.right === true);

  return (
    <div className={styles["navbar__logo-container"]}>
      <Link to={logo.path}>
        <Logo classes={styles.navbar__logo} />
      </Link>
      {leftMenu.map((element) => {
        return (
          <MenuItem to={element.path}>
            {element.title} {element.icon}
          </MenuItem>
        );
      })}
      ;
      {rightMenu.map((element) => {
        return (
          <MenuItem to={element.path}>
            {element.title} {element.icon}
          </MenuItem>
        );
      })}
      ;
    </div>
  );
};
