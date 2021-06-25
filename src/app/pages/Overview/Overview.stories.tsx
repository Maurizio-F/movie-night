import React from "react";
import Overview from "./Overview";

export default {
  title: "Page/Overview",
  component: Overview,
  parameters: {
    layout: "fullscreen",
  },
};

export const OverviewPage = (): JSX.Element => <Overview />;
