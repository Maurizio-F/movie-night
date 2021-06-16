import React from "react";
import AvailableStreamingSection from "./AvailableStreamingSection";

export default {
  title: "Component/AvailableStreamingSection",
  component: AvailableStreamingSection,
};

const streaming = [
  {
    streamingPath: "/netflix.png",
  },
  {
    streamingPath: "/amazonPrime.png",
  },
  {
    streamingPath: "/disney.png",
  },
];

export const StreamingService = (): JSX.Element => (
  <AvailableStreamingSection availableStreaming={streaming} />
);
