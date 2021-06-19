import React from "react";
import Trailer from "../../components/Trailer/Trailer";
import CastCard from "../../components/CastCard/CastCard";
import AvailableStreamingSection from "../../components/AvailableStreamingSection/AvailableStreamingSection";
import Footer from "../../components/Footer/Footer";

function MovieDetails(): JSX.Element {
  return (
    <div>
      <main>
        <Trailer videoSrc="" />
        <div>
          <h2></h2>
          <span></span>
          <span></span>
          <CastCard imgSrc="" name="" filmName="" />
          <AvailableStreamingSection availableStreaming={streaming} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

const streaming = [
  {
    streamingPath: "./netflix.png",
  },
  {
    streamingPath: "./amazonPrime.png",
  },
  {
    streamingPath: "./disney.png",
  },
];

export default MovieDetails;
