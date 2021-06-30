import React from "react";
import Trailer from "../../components/Trailer/Trailer";
import CastCardElement from "../../components/CastCardsElement/CastCardsElement";
import Footer from "../../components/Footer/Footer";
import styles from "./MovieDetails.module.css";
import useFetch from "../../hooks/useFetch";
import { MovieResult } from "../../../server/movieDatabase";
import AvailableSectionIcon from "../../components/Icons/AvailableSectionIcon";
import netflix from "../../assets/netflix.png";
import amazonPrime from "../../assets/amazonPrime.png";
import disney from "../../assets/disney.png";
import BackButton from "../../components/BackButton/BackButton";
import { useParams } from "react-router-dom";

function MovieDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { data: movie } = useFetch<MovieResult>(`/api/movies/${id}`);

  if (!movie) {
    return <div>No Movie found</div>;
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
        <div className={styles.availableStreaming}>
          <div>
            <AvailableSectionIcon />
            <div>
              <img className={styles.streamingService} src={netflix}></img>
              <img className={styles.streamingService} src={amazonPrime}></img>
              <img className={styles.streamingService} src={disney}></img>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default MovieDetails;
