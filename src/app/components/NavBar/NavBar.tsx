import React from "react";
import SofaIcon from "../Icons/SofaIcon";
import LogoIcon from "../Icons/LogoIcon";
import DiceIcon from "../Icons/DiceIcon";
import NavBarLink from "../NavBarLink/NavBarLink";

import styles from "./NavBar.module.css";

function NavBar(): JSX.Element {
  return (
    <div className={styles.navBar}>
      <NavBarLink icon={<SofaIcon />} link="/planen" />
      <NavBarLink icon={<LogoIcon />} link="/" />
      <NavBarLink icon={<DiceIcon />} link="zufallsgenerator" />
    </div>
  );
}

export default NavBar;
