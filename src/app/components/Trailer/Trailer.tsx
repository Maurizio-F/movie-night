import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import YoutubePlayer from "react-youtube-player";

type TrailerProps = {
  videoSrc: string;
};

function Trailer({ videoSrc }: TrailerProps): JSX.Element {
  return (
    <YoutubePlayer
      videoId={videoSrc}
      playbackState="unstarted"
      configuration={{
        showinfo: 0,
        controls: 0,
      }}
    />
  );
}

export default Trailer;
