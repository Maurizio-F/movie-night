import React from "react";
import styles from "./SmallMovieCard.module.css";

type CardProps = {
  imgSrc: string;
  movieName: string;
  genres: string[];
  runtime: number;
};

function SmallMovieCard({
  imgSrc,
  movieName,
  genres,
  runtime,
}: CardProps): JSX.Element {
  return (
    <div className={styles.movieCard}>
      <img className={styles.movieCard__image} src={imgSrc} />
      <div>
        <h2 className={styles.movieCard__headline}>{movieName}</h2>
        <span className={styles.movieCard__genres}>{genres}</span>
        <span className={styles.movieCard__runtime}>{runtime} min</span>
      </div>
    </div>
  );
}

export default SmallMovieCard;
