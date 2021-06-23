import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import InputField from "../../components/InputField/InputField";
import GenreButton from "../../components/GenreButton/GenreButton";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

function Planen(): JSX.Element {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <div>
          <InputField
            label="Name"
            placeholder="Bezeichnung"
            value="Name"
            type="text"
          />
          <InputField
            label="Datum"
            placeholder="Datum"
            value="Datum"
            type="text"
          />
        </div>
        <span>Genres</span>
        <div>
          <GenreButton>Abenteuer</GenreButton>
          <GenreButton>Action</GenreButton>
          <GenreButton>Animation</GenreButton>
          <GenreButton>Dokumentarfilme</GenreButton>
          <GenreButton>Drama</GenreButton>
          <GenreButton>Familie</GenreButton>
          <GenreButton>Fantasy</GenreButton>
          <GenreButton>Historie</GenreButton>
          <GenreButton>Horror</GenreButton>
          <GenreButton>Komödie</GenreButton>
          <GenreButton>Kriegsfilm</GenreButton>
          <GenreButton>Krimi</GenreButton>
          <GenreButton>Liebesfilm</GenreButton>
          <GenreButton>Musik</GenreButton>
          <GenreButton>Mystery</GenreButton>
          <GenreButton>Science Fiction</GenreButton>
          <GenreButton>TV-Film</GenreButton>
          <GenreButton>Thriller</GenreButton>
          <GenreButton>Western</GenreButton>
        </div>
        <Button>Zur Filmauswahl</Button>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Planen;
