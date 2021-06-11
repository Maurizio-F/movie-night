import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomescreenLink.module.css";

type LinkProps = {
  text: string;
  link: string;
};

function HomescreenLink({ text, link }: LinkProps): JSX.Element {
  return (
    <Link className={styles.homescreenLink} to={link}>
      {text}
    </Link>
  );
}

export default HomescreenLink;
