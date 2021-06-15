import React from "react";
import BigMovieCard from "./BigMovieCard";

export default {
  title: "Component/BigMovieCard",
  component: BigMovieCard,
};

export const Cruella = (): JSX.Element => (
  <BigMovieCard imgSrc="./cruella.jpeg" movieName="Cruella" />
);

export const MortalCombat = (): JSX.Element => (
  <BigMovieCard imgSrc="./cruella.jpeg" movieName="Cruella" />
);

export const JusticeLeague = (): JSX.Element => (
  <BigMovieCard imgSrc="./cruella.jpeg" movieName="Cruella" />
);
