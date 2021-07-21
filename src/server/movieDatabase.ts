import fetch from "node-fetch";

const { THE_MOVIE_DB_KEY } = process.env;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

if (!THE_MOVIE_DB_KEY) {
  throw new Error("process.env.THE_MOVIE_DB_KEY is missing");
}

export async function fetchMovieApi(id: string): Promise<FetchResult> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${THE_MOVIE_DB_KEY}&language=de&append_to_response=videos`
  );
  if (!response.ok) {
    throw new Error("ERROR");
  }
  const result = await response.json();
  return result;
}

export async function fetchCreditsApi(id: string): Promise<FetchCreditsResult> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${THE_MOVIE_DB_KEY}`
  );
  if (!response.ok) {
    throw new Error("ERROR");
  }
  const result = await response.json();
  return result;
}

export async function fetchProviderApi(
  id: string
): Promise<FetchProviderResult> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${THE_MOVIE_DB_KEY}`
  );
  if (!response.ok) {
    throw new Error("ERROR");
  }
  const result = await response.json();
  return result;
}

export async function getMovie(id: string): Promise<MovieResult> {
  const fullMovie = await fetchMovieApi(id);
  const fullCast = await fetchCreditsApi(id);
  const fullProvider = await fetchProviderApi(id);

  const movie: MovieResult = {
    genres: fullMovie.genres.map((genre) => genre.name),
    id: fullMovie.id,
    overview: fullMovie.overview,
    posterPath: `${IMAGE_BASE_URL}${fullMovie.poster_path}`,
    runtime: fullMovie.runtime,
    title: fullMovie.title,
    video: fullMovie.videos.results.map((result) => result.key),
    actors: fullCast.cast.map((actor) => ({
      id: actor.id,
      name: actor.name,
      profilePath: `${IMAGE_BASE_URL}${actor.profile_path}`,
      character: actor.character,
    })),
    flatrateProvider: fullProvider.results.AR.flatrate.map((flatrate) => ({
      id: flatrate.provider_id,
      streamingPath: `${IMAGE_BASE_URL}${flatrate.logo_path}`,
    })),
    rentProvider: fullProvider.results.AR.rent.map((rent) => ({
      id: rent.provider_id,
      streamingPath: `${IMAGE_BASE_URL}${rent.logo_path}`,
    })),
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
  videos: {
    results: {
      id: string;
      iso_639_1: string;
      iso_3166_1: string;
      key: string;
      name: string;
      site: string;
      size: number;
      type: string;
    }[];
  };
};

type FetchCreditsResult = {
  id: number;
  cast: {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: string;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }[];
  crew: {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: string;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
  }[];
};

type FetchProviderResult = {
  id: number;
  results: {
    AR: {
      link: string;
      flatrate: {
        logo_path: string;
        provider_id: number;
      }[];
      rent: {
        logo_path: string;
        provider_id: number;
      }[];
    };
  };
};

export type MovieResult = {
  genres: string[];
  id: number;
  overview: string | null;
  posterPath: string;
  runtime: number | null;
  title: string;
  actors: {
    id: number;
    name: string;
    profilePath: string;
    character: string;
  }[];
  flatrateProvider: {
    id: number;
    streamingPath: string;
  }[];
  rentProvider: {
    id: number;
    streamingPath: string;
  }[];
  video: string[];
};
