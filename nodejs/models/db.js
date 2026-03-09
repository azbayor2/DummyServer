import config from "../config/config.json" with { type: "json" };
import { Sequelize } from "sequelize";
import Data from "./Data.js";

const models = {};
const env = process.env.NODE_ENV || "development";
const dbconfig = config[env];

const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.username,
  dbconfig.password,
  dbconfig,
);

models.sequelize = sequelize;
models.Sequelize = Sequelize;
models.Data = Data(sequelize, Sequelize);

export default models;
