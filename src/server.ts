import dotenv from "dotenv";
dotenv.config();

import express from "express";
import router from "./server/routes";
import { connectDatabase } from "./server/database";

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.use("/api", router);

connectDatabase().then(() => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`MovieNight is listening at http://localhost:${PORT}`);
  });
});
