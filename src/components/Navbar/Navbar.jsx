// import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import { routes } from "../../routes/index";
import { Menu } from "./Menu";

const Hamburger = () => (
  <div className={styles.hamburger} id={styles.hamburger}>
    <span className={styles.line} />
    <span className={styles.line} />
    <span className={styles.line} />
  </div>
);

export const Navbar = () => {
  // commented for now cause it might be useful
  //
  // const [width, setWidth] = useState(0);
  // useEffect(() => {
  //   const updateWidth = () => {
  //     const { innerWidth } = window;
  //     setWidth(innerWidth);
  //   };
  //   window.addEventListener("resize", updateWidth);
  //   return () => window.removeEventListener("resize", updateWidth);
  // }, [width]);
  // if (width < 1440) {
  //   console.log("asd");
  // } else {
  //   console.log("sad");
  // }
  return (
    <nav className={styles.navbar}>
      <Hamburger />
      <Menu list={routes} />
    </nav>
  );
};
