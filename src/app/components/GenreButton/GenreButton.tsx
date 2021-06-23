import React, { ReactNode } from "react";
import styles from "./GenreButton.module.css";

type GenreButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

function GenreButton({ children, onClick }: GenreButtonProps): JSX.Element {
  return (
    <button className={styles.genreButton} onClick={onClick}>
      {children}
    </button>
  );
}

export default GenreButton;
