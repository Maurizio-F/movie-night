import React from "react";
import HomescreenLink from "../../components/HomescreenLink/HomescreenLink";
import styles from "./Homescreen.module.css";
import HomescreenElement from "./HomescreenElement";
import logo from "../../assets/logoWithText.png";

function Homescreen(): JSX.Element {
  return (
    <div className={styles.container}>
      <main>
        <img className={styles.logo} src={logo} alt="" />
      </main>
      <div className={styles.bottom}>
        <HomescreenLink text="Planen" link={"/planen"} />
        <HomescreenLink text="Zufallsgenerator" link={"/zufallsgenerator"} />
        <HomescreenElement />
      </div>
    </div>
  );
}

export default Homescreen;
