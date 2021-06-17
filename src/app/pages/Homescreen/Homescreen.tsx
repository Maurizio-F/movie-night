import React from "react";
import styles from "./Homescreen.module.css";
import HomescreenElement from "./HomescreenElement";

function Homescreen(): JSX.Element {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.logo}>
          <img src="./logoWithText.png" alt="" />
        </div>
      </main>
      <footer className={styles.footer}>
        <HomescreenElement />
      </footer>
    </div>
  );
}

export default Homescreen;
