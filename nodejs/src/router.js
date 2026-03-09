import express from "express";
import {
  getHelloWorld,
  get,
  getFromPython,
  post,
  health,
} from "./controller.js";

const router = express.Router();

router.get("/health", getHelloWorld);
router.get("/", get);
router.post("/", post);
router.get("/python", getFromPython);
router.get("/health", health);

export default router;
