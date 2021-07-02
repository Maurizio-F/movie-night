import dotenv from "dotenv";
dotenv.config();

import express from "express";
import router from "./server/routes";
import path from "path";

const app = express();
const { PORT } = process.env;

app.use(express.json());

app.use("/api", router);

app.use("/storybook", express.static("dist/storybook"));

app.use(express.static("dist/app"));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "app/index.html"));
});

app.listen(PORT, () => {
  console.log(`MovieNight is listening at http://localhost:${PORT}`);
});
