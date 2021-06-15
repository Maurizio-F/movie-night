import React from "react";
import CastCard from "./CastCard";

export default {
  title: "Component/CastCard",
  component: CastCard,
  parameters: {
    layout: "centered",
  },
};

export const emmaStone = (): JSX.Element => (
  <CastCard
    imgSrc="./emmaStone.jpeg"
    name="Emma Stone"
    filmName="Cruella de Vil / Estella"
  />
);

export const emmaThompson = (): JSX.Element => (
  <CastCard
    imgSrc="./emmaThompson.jpeg"
    name="Emma Thompson"
    filmName="The Baroness"
  />
);

export const joelFry = (): JSX.Element => (
  <CastCard imgSrc="./joelFry.jpeg" name="Joel Fry" filmName="Jasper" />
);
