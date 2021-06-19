import dotenv from "dotenv";
dotenv.config();

import express from "express";
import router from "./server/routes";
import { connectDatabase } from "./server/database";

const app = express();
const { PORT } = process.env;

connectDatabase();

app.use(express.json());

app.use("/api", router);

app.get("/", (_req, res) => {
  res.send("Test1");
});

app.listen(PORT, () => {
  console.log(`MovieNight is listening at http://localhost:${PORT}`);
});
