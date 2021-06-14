import React from "react";

import Button from "./Button";

export default {
  title: "Component/Button",
  component: Button,
};

export const Auswahl = (): JSX.Element => <Button>Filmauswahl</Button>;
export const Film = (): JSX.Element => <Button>Nächster Film</Button>;
