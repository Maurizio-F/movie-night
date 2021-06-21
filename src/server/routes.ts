import express from "express";
import { getMovie } from "./movieDatabase";

const router = express.Router();

// Get one movie

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

router.get("/actors:id", (_req, res) => {
  res.status(404).send();
});

// Post one

router.post("/", (_req, res) => {
  res.status(404).send("Movie send");
});

export default router;
