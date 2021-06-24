import React from "react";
import MatchPage from "./Match";

export default {
  title: "Page/Match",
  component: MatchPage,
  parameters: {
    layout: "fullscreen",
  },
};

export const MatchView = (): JSX.Element => <MatchPage />;
