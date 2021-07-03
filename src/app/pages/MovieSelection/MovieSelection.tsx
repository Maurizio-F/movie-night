import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BackButton from "../../components/BackButton/BackButton";
import SmallMovieCard from "../../components/SmallMovieCard/SmallMovieCard";
import Button from "../../components/Button/Button";
import BottomElement from "../../components/BottomElement/BottomElement";
import styles from "./MovieSelection.module.css";

function MovieSelection(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <NavBar />
      </header>
      <main>
        <BackButton />
        <p className={styles.filmSelectionHeadline}>Deine Filmauswahl</p>

        <div className={styles.cardSection}>
          <SmallMovieCard
            imgSrc="./cruella.jpeg"
            movieName="Cruella"
            genres={["Komödie, ", "Krimi"]}
            runtime={120}
          />
          <SmallMovieCard
            imgSrc="./mortalKombat.jpeg"
            movieName="Mortal Kombat"
            genres={["Action"]}
            runtime={120}
          />
          <SmallMovieCard
            imgSrc="./justiceLeague.jpeg"
            movieName="Justice League"
            genres={["Action, ", "Drama"]}
            runtime={120}
          />
        </div>
        <div className={styles.button}>
          <Button>Teilen</Button>
        </div>
      </main>
      <footer className={styles.footer}>
        <BottomElement />
      </footer>
    </div>
  );
}

export default MovieSelection;
