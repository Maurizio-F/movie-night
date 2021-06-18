import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDatabase } from "./server/database";

const app = express();
const { PORT } = process.env;

app.use(express.json());

connectDatabase().then(() => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`MovieNight is listening at http://localhost:${PORT}`);
  });
});
