import React from "react";
import BigMovieCard from "./BigMovieCard";

export default {
  title: "Component/BigMovieCard",
  component: BigMovieCard,
};

export const Cruella = (): JSX.Element => (
  <BigMovieCard imgSrc="./cruella.jpeg" movieName="Cruella" />
);

export const MortalKombat = (): JSX.Element => (
  <BigMovieCard imgSrc="./mortalKombat.jpeg" movieName="Mortal Kombat" />
);

export const JusticeLeague = (): JSX.Element => (
  <BigMovieCard imgSrc="./justiceLeague.jpeg" movieName="Justice League" />
);
