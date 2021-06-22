import React from "react";
import styles from "./CastCard.module.css";

type CastCardProps = {
  imgSrc: string;
  name: string;
};

function CastCard({ imgSrc, name }: CastCardProps): JSX.Element {
  return (
    <div className={styles.castCard}>
      <div>
        <img className={styles.castCard__image} src={imgSrc} alt="" />
      </div>
      <div className={styles.nameSection}>
        <h1 className={styles.castCard__name}>{name}</h1>
      </div>
    </div>
  );
}

export default CastCard;
