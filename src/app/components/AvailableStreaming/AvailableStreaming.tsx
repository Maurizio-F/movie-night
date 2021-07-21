import React from "react";

type AvailableStreamingProps = {
  imgSrc: string;
};

function availableStreaming({ imgSrc }: AvailableStreamingProps): JSX.Element {
  return (
    <div>
      <img src={imgSrc} />
    </div>
  );
}

export default availableStreaming;
