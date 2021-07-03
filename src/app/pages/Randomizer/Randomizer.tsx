import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BigMovieCard from "../../components/BigMovieCard/BigMovieCard";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import styles from "./Randomizer.module.css";
import useFetch from "../../hooks/useFetch";
import { MovieResult } from "../../../server/movieDatabase";

function Randomizer(): JSX.Element {
  const { data: movie, reFetch } = useFetch<MovieResult>(`/api/movies/random`);

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
            id={movie.id}
          />
        </div>
        <div className={styles.button}>
          <Button onClick={() => reFetch()}>Nächster Film</Button>
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Randomizer;
