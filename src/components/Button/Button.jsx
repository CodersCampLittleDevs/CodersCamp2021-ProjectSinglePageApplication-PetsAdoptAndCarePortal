import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./button.module.scss";

export const Button = ({ to, children, type, classes, onClick, disabled }) => {
  if (to) {
    return (
      <Link className={clsx([styles.button, classes])} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={clsx([styles.button, classes])}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.string,
};

Button.defaultProps = {
  to: "",
  type: "button",
  classes: "",
  disabled: "",
};
