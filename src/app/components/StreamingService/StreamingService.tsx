import React, { ReactNode } from "react";

type StreamingServiceProps = {
  imgSrc: ReactNode;
};

function StreamingService({ imgSrc }: StreamingServiceProps): JSX.Element {
  return <div>{imgSrc}</div>;
}

export default StreamingService;
