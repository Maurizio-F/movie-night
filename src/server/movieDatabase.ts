import fetch from "node-fetch";

const { THE_MOVIE_DB_KEY } = process.env;

if (!THE_MOVIE_DB_KEY) {
  throw new Error("process.env.THE_MOVIE_DB_KEY is missing");
}

export async function fetchMovieApi(id: string): Promise<FetchResult> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${THE_MOVIE_DB_KEY}`
  );
  if (!response.ok) {
    throw new Error("ERROR");
  }
  const result = await response.json();
  return result;
}

export async function getMovie(id: string): Promise<MovieResult> {
  const fullMovie = await fetchMovieApi(id);

  const movie = {
    genres: fullMovie.genres.map((genre) => genre.name),
    id: fullMovie.id,
    overview: fullMovie.overview,
    posterPath: fullMovie.poster_path,
    runtime: fullMovie.runtime,
    title: fullMovie.title,
    video: fullMovie.video,
  };
  return movie;
}

type FetchResult = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | unknown;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  status:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieResult = {
  genres: string[];
  id: number;
  overview: string | null;
  posterPath: string | null;
  runtime: number | null;
  title: string;
  video: boolean;
};
