import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./navbar.module.scss";
import { Logo } from "../logo/Logo";

export const Menu = ({ list }) => {
  return (
    <div className={clsx(["navbar__logo-container", "menu"])}>
      {list.map((item) => {
        if (item.logo) {
          return (
            <Link to={item.path} key={item.title}>
              <Logo classes={styles.navbar__logo} />
            </Link>
          );
        }
        return (
          <div key={item.title} to={item.path}>
            {item.title} {item.icon}
          </div>
        );
      })}
    </div>
  );
};

Menu.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.bool]),
    ),
  ).isRequired,
};
