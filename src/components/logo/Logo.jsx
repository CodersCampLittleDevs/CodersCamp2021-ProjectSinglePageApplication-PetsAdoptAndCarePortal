import propTypes from "prop-types";
import logo from "./logo.png";

export const Logo = ({ classes }) => {
  return <img className={classes} src={logo} alt="Logo" />;
};

Logo.propTypes = { classes: propTypes.string.isRequired };
