import React from "react";
import { useHistory } from "react-router-dom";
import BackButtonIcon from "../Icons/BackButtonIcon";
import styles from "./BackButton.module.css";

function BackButton(): JSX.Element {
  const history = useHistory();

  return (
    <button className={styles.backButton} onClick={() => history.goBack()}>
      <BackButtonIcon />
    </button>
  );
}

export default BackButton;
