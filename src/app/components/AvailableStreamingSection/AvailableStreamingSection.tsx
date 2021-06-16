import React from "react";
import AvailableSectionIcon from "../Icons/AvailableSectionIcon";
import StreamingService from "../StreamingService/StreamingService";
import styles from "./AvailableStreamingSection.module.css";

export type AvailableProps = {
  availableStreaming: {
    streamingPath: string;
  }[];
};

function AvailableStreamingSection({
  availableStreaming,
}: AvailableProps): JSX.Element {
  return (
    <div className={styles.streamingSection}>
      <AvailableSectionIcon />
      <div className={styles.streamingSection__image}>
        {availableStreaming.map((streaming) => (
          <StreamingService
            key={streaming.streamingPath}
            imgSrc={streaming.streamingPath}
          />
        ))}
      </div>
    </div>
  );
}

export default AvailableStreamingSection;
