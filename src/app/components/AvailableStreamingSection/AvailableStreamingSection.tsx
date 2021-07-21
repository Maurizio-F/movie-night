import React from "react";
import AvailableStreaming from "../AvailableStreaming/AvailableStreaming";

import styles from "./AvailableStreamingSection.module.css";

type AvailableProps = {
  streaming: {
    id?: number;
    streamingPath: string;
  }[];
};

function AvailableStreamingSection({ streaming }: AvailableProps): JSX.Element {
  return (
    <div className={styles.streamingSection__image}>
      {streaming.map((streaming) => (
        <AvailableStreaming
          key={streaming.id}
          imgSrc={streaming.streamingPath}
        />
      ))}
    </div>
  );
}

export default AvailableStreamingSection;
