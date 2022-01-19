/* eslint-disable no-else-return */
import React, { useState } from "react";

import propTypes from "prop-types";

const LIST = ["Zakładka1", "Zakładka2", "Zakładka3"];

const Menu = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter((prevState) => prevState + 1);
  };
  const renderElements = () => {
    const items = React.Children.map(children, (item) => {
      let component;
      if (item.type.name === "Header") {
        component = React.cloneElement(item, {
          classes: "test2",
          onClick: increase,
          counter,
        });
      } else if (item.type.name === "MenuItem") {
        component = item;
      }
      return component;
    });
    return items;
  };
  return <div>{renderElements()}</div>;
};

const MenuItem = ({ title = null }) => {
  return <p>{title}</p>;
};
const Header = ({ title, classes, onClick, counter }) => {
  return (
    <div>
      <h2 className={classes}>{title}</h2>
      <p>{counter}</p>
      <button onClick={onClick}>Podbij o 1</button>
    </div>
  );
};

export const Account = () => {
  return (
    <Menu>
      <Header title="Tytuł" />
      {LIST.map((item) => (
        <MenuItem key={item} title={item} />
      ))}
    </Menu>
  );
};

Menu.propTypes = {
  children: propTypes.node.isRequired,
};

MenuItem.propTypes = {
  title: propTypes.string.isRequired,
};
Header.propTypes = {
  title: propTypes.string.isRequired,
  classes: propTypes.string,
  counter: propTypes.number,
  onClick: propTypes.func,
};
Header.defaultProps = {
  classes: "",
  counter: 0,
  onClick: null,
};
