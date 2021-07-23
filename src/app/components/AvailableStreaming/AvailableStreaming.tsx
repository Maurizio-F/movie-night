import React from "react";
import styles from "./AvailableStreaming.module.css";

type AvailableStreamingProps = {
  imgSrc: string;
};

function availableStreaming({ imgSrc }: AvailableStreamingProps): JSX.Element {
  return (
    <div>
      <img className={styles.providerImage} src={imgSrc} />
    </div>
  );
}

export default availableStreaming;
