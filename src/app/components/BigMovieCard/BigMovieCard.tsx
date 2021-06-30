import React, { ReactNode } from "react";
import ShowMoreLink from "../ShowMoreLink/ShowMoreLink";
import styles from "./BigMovieCard.module.css";
import defaultImage from "../../assets/default.png";
import ImageFallback from "../ImageFallback/ImageFallback";

type CardProps = {
  imgSrc: string;
  movieName: string;
  id?: ReactNode;
};

function BigMovieCard({ imgSrc, movieName, id }: CardProps): JSX.Element {
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
      <ShowMoreLink link={`/movies/${id}`} />
    </div>
  );
}

export default BigMovieCard;
