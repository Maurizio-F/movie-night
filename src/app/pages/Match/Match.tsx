import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BackButton from "../../components/BackButton/BackButton";
import BigMovieCard from "../../components/BigMovieCard/BigMovieCard";
import Button from "../../components/Button/Button";
import BottomElement from "../../components/BottomElement/BottomElement";
import styles from "./Match.module.css";

function MatchPage(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <NavBar />
      </header>
      <main>
        <BackButton />
        <p className={styles.matchText}>Wir haben einen Match!</p>
        <BigMovieCard imgSrc="./cruella.jpeg" movieName="Cruella" />
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

export default MatchPage;
