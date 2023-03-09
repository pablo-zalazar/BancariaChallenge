import { DataTypes } from "sequelize";
import { db } from "../db/database.js";

export const Favorites = db.define(
  "favorites",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    status: {
      type: DataTypes.STRING,
    },
    species: {
      type: DataTypes.STRING,
    },
    origin: {
      type: DataTypes.JSON,
    },
    location: {
      type: DataTypes.JSON,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);
