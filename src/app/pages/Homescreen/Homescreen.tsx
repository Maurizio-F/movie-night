import React from "react";
import HomescreenLink from "../../components/HomescreenLink/HomescreenLink";
import styles from "./Homescreen.module.css";
import HomescreenElement from "./HomescreenElement";

function Homescreen(): JSX.Element {
  return (
    <div className={styles.container}>
      <main>
        <img className={styles.logo} src="./logoWithText.png" alt="" />
      </main>
      <div className={styles.bottom}>
        <HomescreenLink text={"Planen"} link={""} />
        <HomescreenLink text={"Zufallsgenerator"} link={""} />
        <HomescreenElement />
      </div>
    </div>
  );
}

export default Homescreen;
