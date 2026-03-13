import express from "express";
import {
  getHelloWorld,
  get,
  getFromPython,
  post,
  health,
  getUsers,
  createUser,
  deleteUser,
} from "./controller.js";

const router = express.Router();

router.get("/health", getHelloWorld);
router.get("/", get);
router.post("/", post);
router.get("/python", getFromPython);
router.get("/health", health);
router.get("/users", getUsers);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);

export default router;
