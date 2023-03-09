import { Sequelize } from "sequelize";
import { DB_NAME, DB_PASSWORD, DB_USER } from "../config/config.js";

// export const db = new Sequelize("rickandmorty", "root", "password", {
//   host: "localhost",
//   dialect: "mysql",
// });

export const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});
