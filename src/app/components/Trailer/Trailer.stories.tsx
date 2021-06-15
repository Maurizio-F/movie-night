import React from "react";
import Trailer from "./Trailer";

export default {
  title: "Component/Trailer",
  component: Trailer,
};

export const TrailerCruella = (): JSX.Element => {
  return <Trailer videoSrc="https://youtu.be/KIRKfx5Cbec"></Trailer>;
};

export const TrailerMortalKombat = (): JSX.Element => {
  return <Trailer videoSrc="https://youtu.be/RyTqAemkPWo"></Trailer>;
};

export const TrailerJusticeLeague = (): JSX.Element => {
  return <Trailer videoSrc="https://youtu.be/rF03DlaE3ks"></Trailer>;
};
