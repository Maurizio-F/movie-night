import React from "react";
import SmallMovieCard from "./SmallMovieCard";

export default {
  title: "Component/SmallMovieCard",
  component: SmallMovieCard,
};

export const Cruella = (): JSX.Element => {
  return (
    <SmallMovieCard
      imgSrc="./cruella.jpeg"
      movieName="Cruella"
      genres={["Action, ", "Drama"]}
      runtime={120}
    />
  );
};

export const MortalKombat = (): JSX.Element => {
  return (
    <SmallMovieCard
      imgSrc="./mortalKombat.jpeg"
      movieName="Mortal Kombat"
      genres={["Action"]}
      runtime={150}
    />
  );
};

export const JusticeLeague = (): JSX.Element => {
  return (
    <SmallMovieCard
      imgSrc="./justiceLeague.jpeg"
      movieName="Justice League"
      genres={["Action, ", "Drama"]}
      runtime={150}
    />
  );
};
