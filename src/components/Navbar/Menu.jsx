import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useAppRoutes } from "../../hooks/useAppRoutes";
import styles from "./navbar.module.scss";

export const Menu = ({ isOpen }) => {
  const menuClasses = clsx(styles.menu, { [styles.active]: isOpen });
  const { leftSideRoutes, rightSideRoutes } = useAppRoutes();

  return (
    <div className={menuClasses}>
      <div className={styles.menu__left}>
        {leftSideRoutes.map((item) => (
          <Link className={styles.navbar__Link} key={item.title} to={item.path}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className={styles.menu__right}>
        {rightSideRoutes.map((item) => (
          <Link className={styles.navbar__Link} key={item.title} to={item.path}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
