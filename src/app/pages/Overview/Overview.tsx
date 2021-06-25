import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BackButton from "../../components/BackButton/BackButton";
import ListElement from "../../components/ListElement/ListElement";
import Footer from "../../components/Footer/Footer";
import ShareIcon from "../../components/Icons/ShareIcon";
import DeleteIcon from "../../components/Icons/DeleteIcon";
import styles from "./Overview.module.css";

function Overview(): JSX.Element {
  return (
    <div className={styles.container}>
      <header>
        <NavBar />
      </header>
      <main>
        <BackButton />
        <div className={styles.listElement}>
          <ListElement
            headline="Filmabend 1"
            date="06.07.2021"
            shareButton={<ShareIcon />}
            deleteButton={<DeleteIcon />}
          />
          <ListElement
            headline="Filmabend 2"
            date="12.07.2021"
            deleteButton={<DeleteIcon />}
          />
          <ListElement
            headline="Filmabend 3"
            date="19.07.2021"
            deleteButton={<DeleteIcon />}
          />
          <ListElement
            headline="Filmabend 4"
            date="06.08.2021"
            shareButton={<ShareIcon />}
            deleteButton={<DeleteIcon />}
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Overview;
