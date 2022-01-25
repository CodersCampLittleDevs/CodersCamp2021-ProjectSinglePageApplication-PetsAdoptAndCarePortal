import PropTypes from "prop-types";
import logo from "../../assets/image/logo/logo.png";

export const Logo = ({ classes }) => {
  return <img className={classes} src={logo} alt="Logo" />;
};

Logo.propTypes = { classes: PropTypes.string.isRequired };
