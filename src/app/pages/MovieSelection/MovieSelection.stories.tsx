import React from "react";
import MovieSelection from "./MovieSelection";

export default {
  title: "Page/MovieSelection",
  component: MovieSelection,
  parameters: {
    layout: "fullscreen",
  },
};

export const MovieSelectionPage = (): JSX.Element => <MovieSelection />;
