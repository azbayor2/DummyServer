import config from "../config/config.js";
import { Sequelize } from "sequelize";
import Data from "./Data.js";
import User from "./User.js";

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
models.User = User(sequelize, Sequelize);

export default models;
