import React from "react";
import Zufallsgenerator from "./Zufallsgenerator";

export default {
  title: "Page/Zufallsgenerator",
  component: Zufallsgenerator,
  parameters: {
    layout: "fullscreen",
  },
};

export const ZufallsgeneratorPage = (): JSX.Element => <Zufallsgenerator />;
