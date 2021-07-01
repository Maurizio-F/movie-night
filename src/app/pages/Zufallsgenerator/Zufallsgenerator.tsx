import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import BigMovieCard from "../../components/BigMovieCard/BigMovieCard";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import styles from "./Zufallsgenerator.module.css";
import useFetch from "../../hooks/useFetch";
import { MovieResult } from "../../../server/movieDatabase";

function Zufallsgenerator(): JSX.Element {
  const { data: movie } = useFetch<MovieResult>(`/api/movies/random`);
  const [movieId, setMovieId] = useState();

  if (!movie) {
    return <div></div>;
  }

  return (
    <div className={styles.container}>
      <header>
        <NavBar />
      </header>
      <main>
        <div className={styles.bigMovieCard}>
          <BigMovieCard
            imgSrc={movie.posterPath}
            movieName={movie.title}
            id={movieId}
          />
        </div>
        <div className={styles.button}>
          <Button onClick={() => setMovieId(movieId)}>Nächster Film</Button>
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Zufallsgenerator;
