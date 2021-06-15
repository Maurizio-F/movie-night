import React from "react";
import ReactPlayer from "react-player";

type TrailerProps = {
  videoSrc: string;
};

function Trailer({ videoSrc }: TrailerProps): JSX.Element {
  return <ReactPlayer url={videoSrc} />;
}

export default Trailer;
