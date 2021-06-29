import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BigMovieCard from "../../components/BigMovieCard/BigMovieCard";
import SwipeGameButton from "../../components/SwipeGameButton/SwipeGameButton";
import Footer from "../../components/Footer/Footer";
import styles from "./SwipeGame.module.css";
import TinderCard from "react-tinder-card";

function SwipeGame(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <NavBar />
      </header>
      <main>
        <TinderCard
          onSwipe={onSwipe}
          onCardLeftScreen={() => onCardLeftScreen("fooBar")}
          preventSwipe={["right", "left"]}
        >
          <BigMovieCard imgSrc="./cruella.jpeg" movieName="Cruella" />
        </TinderCard>

        <div className={styles.swipeGameButton}>
          <SwipeGameButton />
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default SwipeGame;
