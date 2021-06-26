import React, { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void | number;
};

function Button({ children, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
