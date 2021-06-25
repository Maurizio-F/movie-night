import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BigMovieCard from "../../components/BigMovieCard/BigMovieCard";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import styles from "./Zufallsgenerator.module.css";
import useFetch from "../../hooks/useFetch";
import { MovieResult } from "../../../server/movieDatabase";

function Zufallsgenerator(): JSX.Element {
  const movie = useFetch<MovieResult>("/api/movies/337404");

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
          <BigMovieCard imgSrc={movie.posterPath} movieName={"Cruella"} />
        </div>
        <Button>Nächster Film</Button>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Zufallsgenerator;
