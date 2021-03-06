import React from "react";
import Trailer from "../../components/Trailer/Trailer";
import CastCardElement from "../../components/CastCardsElement/CastCardsElement";
import BottomElement from "../../components/BottomElement/BottomElement";
import styles from "./MovieDetails.module.css";
import useFetch from "../../hooks/useFetch";
import { MovieResult } from "../../../server/movieDatabase";
import BackButton from "../../components/BackButton/BackButton";
import { useParams } from "react-router-dom";

function MovieDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { data: movie } = useFetch<MovieResult>(`/api/movies/${id}`);

  if (!movie) {
    return <div></div>;
  }

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.trailer}>
          <Trailer videoSrc={movie.video[0]} />
        </div>
        <BackButton />
        <div className={styles.filmInfo}>
          <h2 className={styles.filmName}>{movie.title}</h2>
          <span className={styles.genre}>{`${movie.genres}`}</span>
          <span className={styles.runtime}>{movie.runtime} min</span>
        </div>
        <hr className={styles.border}></hr>

        <p className={styles.filmText}>{movie.overview}</p>
        <hr className={styles.border}></hr>

        <p className={styles.castHeadline}>Darsteller</p>
        <div className={styles.castSection}>
          <CastCardElement actors={movie.actors} />
        </div>
      </main>
      <footer className={styles.footer}>
        <BottomElement />
      </footer>
    </div>
  );
}

export default MovieDetails;
