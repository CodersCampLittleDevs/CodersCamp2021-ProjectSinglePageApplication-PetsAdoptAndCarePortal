import propTypes from "prop-types";
import { Link } from "react-router-dom";

export const Button = ({
  children,
  to,
  type,
  exact,
  onClick,
  disabled,
  classes,
}) => {
  let btn;
  if (to) {
    btn = (
      <Link to={to} exact={exact}>
        {children}
      </Link>
    );
  } else {
    btn = (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classes}
      >
        {children}
      </button>
    );
  }
  return btn;
};

Button.propTypes = {
  type: propTypes.string.isRequired,
};
