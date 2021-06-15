import React from "react";
import BigMovieCard from "./BigMovieCard";

export default {
  title: "Component/BigMovieCard",
  component: BigMovieCard,
};

export const Cruella = (): JSX.Element => (
  <BigMovieCard imgSrc="/" movieName="Cruella" />
);
