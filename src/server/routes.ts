import express from "express";

const router = express.Router();

// Get one movie

router.get("/movies/:id", (req, res) => {
  req.params.id;
  res.status(404).send;
});

// Get one actor

router.get("/actors:id"),
  (req, res) => {
    req.params.id;
    res.status(404).send;
  };

export default router;
