import React from "react";
import ShowMoreLink from "../ShowMoreLink/ShowMoreLink";
import styles from "./BigMovieCard.module.css";
import defaultImage from "../../assets/default.png";
import ImageFallback from "../ImageFallback/ImageFallback";

type CardProps = {
  imgSrc: string;
  movieName: string;
};

function BigMovieCard({ imgSrc, movieName }: CardProps): JSX.Element {
  return (
    <div className={styles.movieCard}>
      <div className={styles.movieCard__container}>
        <ImageFallback
          src={imgSrc}
          alt="Cast"
          fallback={defaultImage}
          className={styles.movieCard__image}
        />
      </div>

      <h1 className={styles.movieCard__headline}>{movieName}</h1>
      <ShowMoreLink link="/movies/337404" />
    </div>
  );
}

export default BigMovieCard;
