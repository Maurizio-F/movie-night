import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BigMovieCard from "../../components/BigMovieCard/BigMovieCard";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import styles from "./Zufallsgenerator.module.css";

function Zufallsgenerator(): JSX.Element {
  return (
    <div className={styles.container}>
      <main>
        <div>
          <NavBar />
        </div>
        <div>
          <BigMovieCard imgSrc={"./cruella.jpeg"} movieName={"Cruella"} />
        </div>
        <div>
          <Button>Nächster Film</Button>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Zufallsgenerator;
