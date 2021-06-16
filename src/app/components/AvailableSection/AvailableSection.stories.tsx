import React from "react";
import AvailableSection from "./AvailableSection";

export default {
  title: "Component/AvailableSection",
  component: AvailableSection,
};

export const AvailablePreview = (): JSX.Element => (
  <AvailableSection imgSrc="/amazonPrime.png" />
);
