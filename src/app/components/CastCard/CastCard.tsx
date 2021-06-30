import React from "react";
import styles from "./CastCard.module.css";
import defaultCastImage from "../../assets/defaultCast.png";
import ImageFallback from "../ImageFallback/ImageFallback";

type CastCardProps = {
  imgSrc: string;
  name: string;
  character: string;
};

function CastCard({ imgSrc, name, character }: CastCardProps): JSX.Element {
  return (
    <div className={styles.castCard}>
      <div>
        <ImageFallback
          src={imgSrc}
          alt="Cast"
          fallback={defaultCastImage}
          className={styles.castCard__image}
        />
      </div>
      <div className={styles.nameSection}>
        <h1 className={styles.castCard__name}>{name}</h1>
        <h2 className={styles.castCard__characterName}>{character}</h2>
      </div>
    </div>
  );
}

export default CastCard;
