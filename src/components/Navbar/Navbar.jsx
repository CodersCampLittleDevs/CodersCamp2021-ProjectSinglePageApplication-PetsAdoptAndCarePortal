import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./navbar.module.scss";
import { useAppRoutes } from "../../hooks/useAppRoutes";
import { Menu } from "./Menu";
import { Logo } from "../Logo/Logo";

const Hamburger = ({ isOpen, handleHamburgerClick }) => {
  const hamburgerClasses = clsx(styles.hamburger, {
    [styles.isActive]: isOpen,
  });

  const hamburgerClick = () => {
    handleHamburgerClick(!isOpen);
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
  const { mainRoute } = useAppRoutes();
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerClick = (value) => setIsOpen(value);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={styles.navbar}>
      <Link to={mainRoute.path} key={mainRoute.title}>
        <Logo classes={styles.navbar__logo} />
      </Link>
      <Hamburger isOpen={isOpen} handleHamburgerClick={handleHamburgerClick} />
      <Menu isOpen={isOpen} />
    </nav>
  );
};

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleHamburgerClick: PropTypes.func.isRequired,
};
