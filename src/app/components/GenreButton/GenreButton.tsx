import React, { ReactNode } from "react";
import styles from "./GenreButton.module.css";

type GenreButtonProps = {
  children: ReactNode;
};

function GenreButton({ children }: GenreButtonProps): JSX.Element {
  return <button className={styles.genreButton}>{children}</button>;
}

export default GenreButton;
