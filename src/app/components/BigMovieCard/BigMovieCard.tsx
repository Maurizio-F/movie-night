import React from "react";
import ShowMoreLink from "../ShowMoreLink/ShowMoreLink";
import styles from "./BigMovieCard.module.css";
import defaultImage from "../../assets/default.png";

type CardProps = {
  imgSrc: string;
  movieName: string;
};

function BigMovieCard({ imgSrc, movieName }: CardProps): JSX.Element {
  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCard__container}>
        <picture>
          <source srcSet={imgSrc} />
          <img
            src={defaultImage}
            alt="Image not found"
            className={styles.movieCard__image}
          />
        </picture>
      </div>

      <h1 className={styles.movieCard__headline}>{movieName}</h1>
      <ShowMoreLink link="/movies/337404" />
    </div>
  );
}

export default BigMovieCard;
