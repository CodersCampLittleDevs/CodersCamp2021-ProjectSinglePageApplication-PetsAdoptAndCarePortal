import logo from "./3.png";

const Logo = (props) => {
  const { classX } = props;
  return <img className={classX} src={logo} alt="Logo" />;
};

export default Logo;
