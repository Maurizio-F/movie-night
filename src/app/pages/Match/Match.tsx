import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BackButton from "../../components/BackButton/BackButton";
import BigMovieCard from "../../components/BigMovieCard/BigMovieCard";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

function MatchPage(): JSX.Element {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <BackButton />
        <BigMovieCard imgSrc="./cruella.jpeg" movieName="Cruella" />
        <Button>Teilen</Button>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MatchPage;
