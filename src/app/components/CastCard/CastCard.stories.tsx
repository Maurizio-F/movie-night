import React from "react";
import CastCard from "./CastCard";

export default {
  title: "Component/CastCard",
  component: CastCard,
};

export const emmaStone = (): JSX.Element => (
  <CastCard
    imgSrc="./emmaStone.jpeg"
    name="Emma Stone"
    character="Estella / Cruella/"
  />
);

export const emmaThompson = (): JSX.Element => (
  <CastCard
    imgSrc="./emmaThompson.jpeg"
    name="Emma Thompson"
    character="The Baroness"
  />
);

export const joelFry = (): JSX.Element => (
  <CastCard imgSrc="./joelFry.jpeg" name="Joel Fry" character="Jasper" />
);
