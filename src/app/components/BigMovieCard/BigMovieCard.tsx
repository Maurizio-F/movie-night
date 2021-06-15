import React from "react";
import ShowMoreLink from "../ShowMoreLink/ShowMoreLink";
import styles from "./BigMovieCard.module.css";

type CardProps = {
  imgSrc: string;
  movieName: string;
};

function BigMovieCard({ imgSrc, movieName }: CardProps): JSX.Element {
  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCard__container}>
        <img
          className={styles.movieCard__image}
          src={imgSrc}
          alt="Movie Poster"
        />
      </div>
      <h1 className={styles.movieCard__headline}>{movieName}</h1>
      <ShowMoreLink link="#" />
    </div>
  );
}

export default BigMovieCard;
