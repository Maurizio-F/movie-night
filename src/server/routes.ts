import express from "express";
import { fetchCreditsApi, fetchMovieApi, getMovie } from "./movieDatabase";

const router = express.Router();

function generateRandomMovieId(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
router.get("/movies/random", async (_req, res) => {
  let movie;
  while (!movie) {
    const id = generateRandomMovieId(1, 100000);
    try {
      movie = await getMovie(id.toString());
    } catch (error) {
      console.warn(`Couldn't find ${id}`);
    }
  }
  res.status(200).json(movie);
});

// All data
router.get("/moviedata/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await fetchMovieApi(id);
    res.status(200).json(movie);
  } catch (error) {
    next(error);
  }
});

// Specific data
router.get("/movies/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await getMovie(id);
    res.status(200).json(movie);
  } catch (error) {
    next(error);
  }
});

// Get one actor

router.get("/actors/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const actor = await fetchCreditsApi(id);
    res.status(200).json(actor);
  } catch (error) {
    next(error);
  }
});

// Post one

router.post("/", (_req, res) => {
  res.status(404).send("Movie send");
});

export default router;
