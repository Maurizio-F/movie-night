import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import BigMovieCard from "../../components/BigMovieCard/BigMovieCard";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import styles from "./Zufallsgenerator.module.css";
import useFetch from "../../hooks/useFetch";
import { MovieResult } from "../../../server/movieDatabase";

function generateRandomMovieId(): number {
  return Math.floor(Math.random() * 99999) + 1;
}

function Zufallsgenerator(): JSX.Element {
  const [movieId, setMovieId] = useState(generateRandomMovieId);
  const movie = useFetch<MovieResult>(`/api/movies/${movieId}`);

  if (!movie) {
    return <div>No Movie found</div>;
  }

  return (
    <div className={styles.container}>
      <header>
        <NavBar />
      </header>
      <main>
        <div className={styles.bigMovieCard}>
          <BigMovieCard imgSrc={movie.posterPath} movieName={movie.title} />
        </div>
        <div className={styles.button}>
          <Button onClick={() => setMovieId(generateRandomMovieId())}>
            Nächster Film
          </Button>
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Zufallsgenerator;
