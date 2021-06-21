import fetch from "node-fetch";

const { THE_MOVIE_DB_KEY } = process.env;

if (!THE_MOVIE_DB_KEY) {
  throw new Error("process.env.THE_MOVIE_DB_KEY is missing");
}

async function fetchMovie(): Promise<void> {
  return fetch(
    `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${THE_MOVIE_DB_KEY}`
  ).then((data) => data.json());
}

console.log(fetchMovie);

export default fetchMovie;
