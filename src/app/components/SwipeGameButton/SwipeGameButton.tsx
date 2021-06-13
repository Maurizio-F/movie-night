import React from "react";
import AcceptIcon from "../Icons/AcceptIcon";
import DeclineIcon from "../Icons/DeclineIcon";

function SwipeGameButton(): JSX.Element {
  return (
    <div>
      <button>
        <AcceptIcon />
      </button>
      ;
      <button>
        <DeclineIcon />
      </button>
      ;
    </div>
  );
}

export default SwipeGameButton;
