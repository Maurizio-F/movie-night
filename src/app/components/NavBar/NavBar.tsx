import React from "react";
import SofaIcon from "../Icons/SofaIcon";
import LogoIcon from "../Icons/LogoIcon";
import DiceIcon from "../Icons/DiceIcon";
import styles from "./NavBar.module.css";

function NavBar(): JSX.Element {
  return (
    <div className={styles.navBar}>
      <SofaIcon />
      <LogoIcon />
      <DiceIcon />
    </div>
  );
}

export default NavBar;
