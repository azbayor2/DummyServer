import models from "../models/db.js";
import axiosInstance from "./axios/axiosInstance.js";

export async function getHelloWorld(req, res) {
  return res.status(200).json({ data: "hello world!" });
}

export async function post(req, res) {
  const { data } = req.body;

  if (!data) {
    return res.status(400).end();
  }

  const query = await models.Data.create({
    comment: data,
  });

  return res.status(201).json(query);
}

export async function get(req, res) {
  const query = await models.Data.findAll();

  return res.status(201).json(query);
}

export async function getFromPython(req, res) {
  const pythonRes = await axiosInstance.get("/");
  if (!pythonRes) return res.status(400).json({ error: "internal error" });
  return res.status(201).json(pythonRes.data);
}
