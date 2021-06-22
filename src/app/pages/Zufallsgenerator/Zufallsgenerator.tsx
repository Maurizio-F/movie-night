import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BigMovieCard from "../../components/BigMovieCard/BigMovieCard";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import styles from "./Zufallsgenerator.module.css";

function Zufallsgenerator(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <NavBar />
      </header>
      <main>
        <div className={styles.bigMovieCard}>
          <BigMovieCard imgSrc={"./cruella.jpeg"} movieName={"Cruella"} />
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
