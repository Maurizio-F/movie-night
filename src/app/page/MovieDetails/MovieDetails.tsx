import React from "react";
import Trailer from "../../components/Trailer/Trailer";
import CastCard from "../../components/CastCard/CastCard";
import AvailableStreamingSection from "../../components/AvailableStreamingSection/AvailableStreamingSection";
import Footer from "../../components/Footer/Footer";
import styles from "./MovieDetails.module.css";

function MovieDetails(): JSX.Element {
  return (
    <div className={styles.container}>
      <main>
        <Trailer videoSrc="https://youtu.be/KIRKfx5Cbec" />
        <div>
          <h2>Cruella</h2>
          <span>Komödie, Krimi</span>
          <span>134 min</span>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            tenetur perferendis expedita magni eius consectetur aliquid
            reprehenderit vel maxime nulla, adipisci excepturi laborum sapiente
            est, optio asperiores vitae rerum eum!
          </p>
        </div>
        <CastCard imgSrc="" name="" filmName="" />
        <AvailableStreamingSection availableStreaming={streaming} />
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
