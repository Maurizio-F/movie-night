import React from "react";
import CastCard from "../CastCard/CastCard";
import styles from "./CastCardsElement.module.css";

type CastCardElement = {
  actors: Array<{
    id?: number;
    profilePath: string;
    name: string;
    character: string;
  }>;
};

function CastCardElement({ actors }: CastCardElement): JSX.Element {
  return (
    <div className={styles.castCards}>
      {actors.map((actor) => (
        <CastCard
          key={actor.id}
          imgSrc={actor.profilePath}
          name={actor.name}
          character={actor.character}
        />
      ))}
    </div>
  );
}

export default CastCardElement;
