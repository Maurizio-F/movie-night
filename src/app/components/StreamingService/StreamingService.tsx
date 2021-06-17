import React from "react";

type StreamingServiceProps = {
  imgSrc: string;
};

function StreamingService({ imgSrc }: StreamingServiceProps): JSX.Element {
  return (
    <div>
      <img src={imgSrc} />
    </div>
  );
}

export default StreamingService;
