import React from "react";
import CastCardsElement from "./CastCardsElement";

export default {
  title: "Component/CastCardsElement",
  component: CastCardsElement,
};

const cast = [
  {
    profilePath: "./emmaStone.jpeg",
    name: "Emma Stone",
    character: "Cruella",
  },
  {
    profilePath: "./emmaThompson.jpeg",
    name: "Emma Thompson",
    character: "The Baroness",
  },
  {
    profilePath: "./joelFry.jpeg",
    name: "Joel Fry",
    character: "Jasper",
  },
];

export const CastCards = (): JSX.Element => <CastCardsElement actors={cast} />;
