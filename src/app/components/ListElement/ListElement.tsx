import React from "react";
import styles from "./ListElement.module.css";

type ListProps = {
  headline: string;
  date: string;
  shareButton?: React.SVGProps<SVGSVGElement>;
  deleteButton: React.SVGProps<SVGSVGElement>;
};

function ListElement({
  headline,
  date,
  shareButton,
  deleteButton,
}: ListProps): JSX.Element {
  return (
    <div className={styles.listElement}>
      <div className={styles.textElement}>
        <p>{headline}</p>
        <p>{date}</p>
      </div>
      <div className={styles.iconElement}>
        <button className={styles.icons}>{shareButton}</button>
        <button className={styles.icons}>{deleteButton}</button>
      </div>
    </div>
  );
}

export default ListElement;
