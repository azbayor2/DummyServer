export default {
  development: {
    username: "root",
    password: "password",
    database: "app_db",
    host: "127.0.0.1",
    port: "3310",
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE || "app_db",
    port: process.env.DB_PORT || "3306",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || "database_production",
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    dialect: "mysql",
  },
};
