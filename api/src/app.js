import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { PORT } from "./config/config.js";
import { db } from "./db/database.js";
import favoriteRoutes from "./route/favoriteRoutes.js";
import charactersRoutes from "./route/charactersRoutes.js";
import locationsRoutes from "./route/locationsRoutes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/favoritos", favoriteRoutes);
app.use("/personajes", charactersRoutes);
app.use("/locaciones", locationsRoutes);

(async () => {
  try {
    await db.authenticate();
    console.log("conectado a la base de datos");
    await db.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`Server escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    throw new Error(error);
  }
})();
