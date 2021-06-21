import fetch from "node-fetch";

const { THE_MOVIE_DB_KEY } = process.env;

if (!THE_MOVIE_DB_KEY) {
  throw new Error("process.env.THE_MOVIE_DB_KEY is missing");
}

export async function fetchMovie(id: string): Promise<void> {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${THE_MOVIE_DB_KEY}`
  );
  if (!response.ok) {
    throw new Error("ERROR");
  }
  const result = await response.json();
  return result;
}
