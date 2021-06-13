import React from "react";
import { useHistory } from "react-router-dom";
import BackButtonIcon from "../Icons/BackButtonIcon";

function BackButton(): JSX.Element {
  const history = useHistory();

  return (
    <button onClick={() => history.goBack()}>
      <BackButtonIcon />
    </button>
  );
}

export default BackButton;
