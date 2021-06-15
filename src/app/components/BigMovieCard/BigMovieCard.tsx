import React from "react";
import styles from "./BigMovieCard.module.css";

type CardProps = {
  imgSrc: string;
  movieName: string;
};

function BigMovieCard({ imgSrc, movieName }: CardProps): JSX.Element {
  return (
    <div className={styles.movieCard}>
      <img src={imgSrc} alt="Movie Poster" />
      <h1>{movieName}</h1>
    </div>
  );
}

export default BigMovieCard;
