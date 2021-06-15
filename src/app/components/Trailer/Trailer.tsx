import React from "react";
import ReactPlayer from "react-player";

type TrailerProps = {
  videoSrc: string;
};

function Trailer({ videoSrc }: TrailerProps): JSX.Element {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={videoSrc}
        className="react-player"
        width="100%"
        height="12em"
      />
    </div>
  );
}

export default Trailer;
