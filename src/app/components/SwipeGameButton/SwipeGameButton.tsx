import React from "react";
import AcceptIcon from "../Icons/AcceptIcon";
import DeclineIcon from "../Icons/DeclineIcon";
import styles from "./SwipeGameButton.module.css";

function SwipeGameButton(): JSX.Element {
  return (
    <div className={styles.swipeGameElement}>
      <button className={styles.acceptButton}>
        <DeclineIcon />
      </button>

      <button className={styles.declineButton}>
        <AcceptIcon />
      </button>
    </div>
  );
}

export default SwipeGameButton;
