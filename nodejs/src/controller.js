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
  const targetUrl = `${axiosInstance.defaults.baseURL}/`;
  console.log(`[getFromPython] 요청 시작 | URL: ${targetUrl}`);

  try {
    const startTime = Date.now();
    const pythonRes = await axiosInstance.get("/");
    const elapsed = Date.now() - startTime;

    console.log(
      `[getFromPython] 응답 수신 | status: ${pythonRes.status} | ${elapsed}ms`,
    );
    console.log(`[getFromPython] 응답 데이터:`, JSON.stringify(pythonRes.data));

    if (!pythonRes) {
      console.error(`[getFromPython] pythonRes가 falsy`);
      return res.status(400).json({ error: "internal error" });
    }
    return res.status(201).json(pythonRes.data);
  } catch (err) {
    console.error(`[getFromPython] 에러 발생 | message: ${err.message}`);
    console.error(
      `[getFromPython] 에러 코드: ${err.code || "N/A"} | status: ${err.response?.status || "N/A"}`,
    );
    if (err.response) {
      console.error(
        `[getFromPython] 에러 응답 데이터:`,
        JSON.stringify(err.response.data),
      );
    }
    return res.status(500).json({ error: err.message });
  }
}

export async function health(req, res) {
  return res.status(200).end();
}
