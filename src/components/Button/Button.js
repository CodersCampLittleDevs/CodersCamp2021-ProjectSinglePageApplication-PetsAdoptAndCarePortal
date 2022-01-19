import { Link } from "react-router-dom";
import propTypes from "prop-types";

export const Button = ({
  to,
  children,
  type,
  styleClass,
  onClick,
  disabled,
}) => {
  if (to) {
    return <Link to={to}>{children}</Link>;
  }
  return (
    <button
      type={type}
      className={`btn ${styleClass}`}
      onClick={() => onClick()}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  to: propTypes.string,
  children: propTypes.node.isRequired,
  type: propTypes.string,
  styleClass: propTypes.string,
  onClick: propTypes.func.isRequired,
  disabled: propTypes.string,
};

Button.defaultProps = {
  to: "",
  type: "button",
  styleClass: "",
  disabled: "",
};
