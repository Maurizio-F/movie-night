import React from "react";
import Trailer from "../../components/Trailer/Trailer";
import CastCardElement from "../../components/CastCardsElement/CastCardsElement";
import AvailableStreamingSection from "../../components/AvailableStreamingSection/AvailableStreamingSection";
import Footer from "../../components/Footer/Footer";
import styles from "./MovieDetails.module.css";
import useFetch from "../../hooks/useFetch";
import { MovieResult } from "../../../server/movieDatabase";
import netflix from "../../assets/netflix.png";

function MovieDetails(): JSX.Element {
  const movie = useFetch<MovieResult>("/api/movies/337404");

  console.log(movie);

  if (!movie) {
    return <div>No Movie found</div>;
  }

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.trailer}>
          {/* <Trailer videoSrc="https://youtu.be/KIRKfx5Cbec" /> */}
        </div>
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
          {/* <AvailableStreamingSection availableStreaming={streaming} /> */}
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

// const streaming = [
//   {
//     streamingPath: { netflix },
//   },
//   {
//     streamingPath: "./amazonPrime.png",
//   },
//   {
//     streamingPath: "./disney.png",
//   },
// ];

export default MovieDetails;
