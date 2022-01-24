import { Link } from "react-router-dom";
import propTypes from "prop-types";
import styles from "./Navbar.module.scss";
import { Logo } from "../Logo/Logo";

export const Menu = ({ list }) => {
  return (
    <div className={styles[("navbar__logo-container", "menu")]}>
      {list.map((element) => {
        if (element.logo) {
          return (
            <Link to={element.path} key={element.title}>
              <Logo classes={styles.navbar__logo} />
            </Link>
          );
        }
        return (
          <div key={element.title} to={element.path}>
            {element.title} {element.icon}
          </div>
        );
      })}
    </div>
  );
};

Menu.propTypes = {
  list: propTypes.arrayOf(
    propTypes.objectOf(
      propTypes.oneOfType([propTypes.string, propTypes.node, propTypes.bool]),
    ),
  ).isRequired,
};
