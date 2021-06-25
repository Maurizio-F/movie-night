import React from "react";
import styles from "./Icons.module.css";
import logo from "../../assets/logo.png";

function LogoIcon(): JSX.Element {
  return <img className={styles.logoIcon} src={logo} alt="logo" />;
}

export default LogoIcon;
