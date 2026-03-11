import express from "express";
import router from "./src/router.js";
import { json } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(json());
app.use("/api", router);

app.listen("7777", () => {
  console.log("listening on port 7777");
});
