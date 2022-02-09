/* eslint-disable no-else-return */
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useContext } from "react";
import { Button } from "..";
import { useAppRoutes } from "../../hooks/useAppRoutes";
import styles from "./navbar.module.scss";
import { AuthContext } from "../../context/auth/AuthContext";

export const Menu = ({ isOpen }) => {
  const menuClasses = clsx(styles.menu, { [styles.active]: isOpen });
  const { leftSideRoutes, rightSideRoutes } = useAppRoutes();
  const { isLoggedIn, onLogout } = useContext(AuthContext);
  const leftSideRoutesLoggedOut = leftSideRoutes.filter(
    (route) => !route.visibleWhenLogged,
  );
  const rightSideRoutesLoggedOut = rightSideRoutes.filter(
    (route) => !route.visibleWhenLogged,
  );
  const rightSideRoutesLoggedIn = rightSideRoutes.filter(
    (route) => route.visibleWhenLogged,
  );

  const logout = () => {
    onLogout();
  };

  return (
    <div className={menuClasses}>
      <div className={styles.menu__left}>
        {isLoggedIn
          ? leftSideRoutes.map((item) => (
              <NavLink
                className={styles.navbar__Link}
                key={item.title}
                to={item.path}
                activeClassName={styles.activeLink}
              >
                {item.title}
              </NavLink>
            ))
          : leftSideRoutesLoggedOut.map((item) => (
              <NavLink
                className={styles.navbar__Link}
                key={item.title}
                to={item.path}
                activeClassName={styles.activeLink}
              >
                {item.title}
              </NavLink>
            ))}
      </div>
      <div className={styles.menu__right}>
        {isLoggedIn
          ? rightSideRoutesLoggedIn.map((item) => (
              <NavLink
                className={styles.navbar__Link}
                key={item.title}
                to={item.path}
                activeClassName={styles.activeLink}
              >
                {item.title}
              </NavLink>
            ))
          : rightSideRoutesLoggedOut.map((item) => (
              <NavLink
                className={styles.navbar__Link}
                key={item.title}
                to={item.path}
                activeClassName={styles.activeLink}
              >
                {item.title}
              </NavLink>
            ))}
        {isLoggedIn && (
          <Button classes={styles.button} onClick={logout}>
            Wyloguj
          </Button>
        )}
      </div>
    </div>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
