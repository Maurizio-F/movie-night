import React from "react";
import MovieDetails from "./MovieDetails";

export default {
  title: "Page/MovieDetails",
  component: MovieDetails,
  parameters: {
    layout: "fullscreen",
  },
};

export const MovieDetailsPage = (): JSX.Element => <MovieDetails />;
