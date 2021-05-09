import React from "react";
import sushiImage from "../../Assets/izna.JPG";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import cla from "./HeaderCartButton.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <button className={cla.button}>About Me</button>

        <h1>Izna Donburi!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={sushiImage} alt="Sushi Image" />
      </div>
    </React.Fragment>
  );
};

export default Header;
