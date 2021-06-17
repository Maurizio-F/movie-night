import React from "react";
import Homescreen from "./Homescreen";

export default {
  title: "Page/Homescreen",
  component: Homescreen,
  parameters: {
    layout: "Fullscreen",
  },
};

export const HomescreenPage = (): JSX.Element => <Homescreen />;
