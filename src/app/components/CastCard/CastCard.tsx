import React from "react";
import styles from "./CastCard.module.css";

type CastCardProps = {
  imgSrc: string;
  name: string;
  filmName: string;
};

function CastCard({ imgSrc, name, filmName }: CastCardProps): JSX.Element {
  return (
    <div className={styles.castCard}>
      <div>
        <img className={styles.castCard__image} src={imgSrc} alt="" />
      </div>
      <div>
        <h1 className={styles.castCard__name}>{name}</h1>
        <h2 className={styles.castCard__filmName}>{filmName}</h2>
      </div>
    </div>
  );
}

export default CastCard;
