import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import BackButton from "../../components/BackButton/BackButton";
import ListElement from "../../components/ListElement/ListElement";
import Footer from "../../components/Footer/Footer";
import ShareIcon from "../../components/Icons/ShareIcon";
import DeleteIcon from "../../components/Icons/DeleteIcon";

function Overview(): JSX.Element {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <BackButton />
        <div>
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Overview;
