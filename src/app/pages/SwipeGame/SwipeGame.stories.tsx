import React from "react";
import SwipeGame from "./SwipeGame";

export default {
  title: "Page/SwipeGame",
  component: SwipeGame,
  parameters: {
    layout: "fullscreen",
  },
};

export const SwipeGamePage = (): JSX.Element => <SwipeGame />;
