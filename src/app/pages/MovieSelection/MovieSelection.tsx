import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BackButton from "../../components/BackButton/BackButton";
import SmallMovieCard from "../../components/SmallMovieCard/SmallMovieCard";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

function MovieSelection(): JSX.Element {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <BackButton />
        <p>Deine Filmauswahl</p>
        <SmallMovieCard
          imgSrc="./cruella.jpeg"
          movieName="Cruella"
          genres={["Komödie", "Krimi"]}
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
          genres={["Action", "Drama"]}
          runtime={120}
        />
        <Button>Teilen</Button>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MovieSelection;
