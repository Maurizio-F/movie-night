import express from "express";

const router = express.Router();

// Get one movie

router.get("/movies/:id", (_req, res) => {
  res.status(404).send("Movies");
});

// Get one actor

router.get("/actors:id", (_req, res) => {
  res.status(404).send();
});

export default router;
