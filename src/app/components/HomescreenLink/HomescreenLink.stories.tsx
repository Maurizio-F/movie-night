import React from "react";
import HomescreenLink from "./HomescreenLink";

export default {
  title: "Component/HomescreenLink",
  component: HomescreenLink,
};

export const Planen = (): JSX.Element => (
  <HomescreenLink text="Planen" link="#" />
);

export const Zufallsgenerator = (): JSX.Element => (
  <HomescreenLink text="Zufallsgenerator" link="#" />
);
