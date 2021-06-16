import React from "react";
import StreamingService from "../StreamingService/StreamingService";

export type AvailableProps = {
  availableStreaming: [
    {
      streamingPath: string;
    }
  ];
};

function AvailableStreamingSection({
  availableStreaming,
}: AvailableProps): JSX.Element {
  return (
    <div>
      {availableStreaming.map((streaming) => (
        <StreamingService
          key={streaming.streamingPath}
          imgSrc={streaming.streamingPath}
        />
      ))}
    </div>
  );
}

export default AvailableStreamingSection;
