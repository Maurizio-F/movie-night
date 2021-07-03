import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BigMovieCard from "../../components/BigMovieCard/BigMovieCard";
import SwipeGameButton from "../../components/SwipeGameButton/SwipeGameButton";
import BottomElement from "../../components/BottomElement/BottomElement";
import styles from "./SwipeGame.module.css";
import TinderCard from "react-tinder-card";
import useFetch from "../../hooks/useFetch";
import { MovieResult } from "../../../server/movieDatabase";

function SwipeGame(): JSX.Element {
  const { data: movie } = useFetch<MovieResult>(`/api/movies/random`);
  const onSwipe = (direction: string) => {
    console.log("You swiped: " + direction);
  };

  if (!movie) {
    return <div></div>;
  }

  const onCardLeftScreen = (myIdentifier: string) => {
    console.log(myIdentifier + " left the screen");
  };
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
          <BigMovieCard
            imgSrc={movie.posterPath}
            movieName={movie.title}
            id={movie.id}
          />
        </TinderCard>

        <div className={styles.swipeGameButton}>
          <SwipeGameButton />
        </div>
      </main>
      <footer className={styles.footer}>
        <BottomElement />
      </footer>
    </div>
  );
}

export default SwipeGame;
