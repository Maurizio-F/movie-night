import React from "react";
import Randomizer from "./Randomizer";

export default {
  title: "Page/Randomizer",
  component: Randomizer,
  parameters: {
    layout: "fullscreen",
  },
};

export const RandomizerPage = (): JSX.Element => <Randomizer />;
