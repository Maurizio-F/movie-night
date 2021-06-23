import React from "react";
import CastCardsElement from "./CastCardsElement";

export default {
  title: "Component/CastCardsElement",
  component: CastCardsElement,
};

const cast = [
  {
    profilePath: "./emmaStone.jpeg",
    artistName: "Emma Stone",
  },
  {
    profilePath: "./emmaThompson.jpeg",
    artistName: "Emma Thompson",
  },
  {
    profilePath: "./joelFry.jpeg",
    artistName: "Joel Fry",
  },
];

export const CastCards = (): JSX.Element => <CastCardsElement actors={cast} />;
