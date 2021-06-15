import React from "react";
import Trailer from "./Trailer";

export default {
  title: "Component/Trailer",
  component: Trailer,
};

export const TrailerPreview = (): JSX.Element => {
  return <Trailer videoSrc="https://youtu.be/KIRKfx5Cbec"></Trailer>;
};
