import React from "react";
import CastCard from "../CastCard/CastCard";

export type CastCardsElementProps = {
  actors: Array<{
    profilePath: string;
    artistName: string;
  }>;
};

function CastCardElement({ actors }: CastCardsElementProps): JSX.Element {
  return (
    <div>
      {actors.map((actor) => (
        <CastCard
          key={actor.artistName}
          imgSrc={actor.profilePath}
          name={actor.artistName}
        />
      ))}
    </div>
  );
}

export default CastCardElement;
