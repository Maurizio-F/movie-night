import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BigMovieCard from "../../components/BigMovieCard/BigMovieCard";
import SwipeGameButton from "../../components/SwipeGameButton/SwipeGameButton";
import Footer from "../../components/Footer/Footer";

function SwipeGame(): JSX.Element {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <BigMovieCard imgSrc="./cruella.jpeg" movieName="Cruella" />
        <div>
          <SwipeGameButton />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SwipeGame;
