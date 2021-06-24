import React from "react";
import Trailer from "../../components/Trailer/Trailer";
import CastCard from "../../components/CastCard/CastCard";
import AvailableStreamingSection from "../../components/AvailableStreamingSection/AvailableStreamingSection";
import Footer from "../../components/Footer/Footer";
import styles from "./MovieDetails.module.css";
import useFetch from "../../hooks/useFetch";

function MovieDetails(): JSX.Element {
  const movie = useFetch("/api/movies/343611");
  console.log(movie);

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.trailer}>
          <Trailer videoSrc="https://youtu.be/KIRKfx5Cbec" />
        </div>
        <div className={styles.filmInfo}>
          <h2 className={styles.filmName}>{}</h2>
          <span className={styles.genre}>Komödie, Krimi</span>
          <span className={styles.runtime}>134 min</span>
        </div>
        <hr className={styles.border}></hr>

        <p className={styles.filmText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          tenetur perferendis expedita magni eius consectetur aliquid
          reprehenderit vel maxime nulla, adipisci excepturi laborum sapiente
          est, optio asperiores vitae rerum eum!
        </p>
        <hr className={styles.border}></hr>

        <p className={styles.castHeadline}>Darsteller</p>
        <div className={styles.castSection}>
          <CastCard imgSrc="./emmaStone.jpeg" name="Emma Stone" />
          <CastCard imgSrc="./emmaThompson.jpeg" name="Emma Thompson" />
          <CastCard imgSrc="./joelFry.jpeg" name="Joel Fry" />
        </div>
        <div className={styles.availableStreaming}>
          <AvailableStreamingSection availableStreaming={streaming} />
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

const streaming = [
  {
    streamingPath: "./netflix.png",
  },
  {
    streamingPath: "./amazonPrime.png",
  },
  {
    streamingPath: "./disney.png",
  },
];

export default MovieDetails;
