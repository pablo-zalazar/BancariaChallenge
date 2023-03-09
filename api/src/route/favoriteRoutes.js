import { Router } from "express";
import { addNewFavoriteController } from "../controller/favorites/addNewFavoriteController.js";
import { getFavoriteController } from "../controller/favorites/getFavoritesController.js";
import { removeFavoriteController } from "../controller/favorites/removeFavoriteController.js";

const router = Router();

router.get("/", getFavoriteController);
router.post("/", addNewFavoriteController);
router.delete("/:id", removeFavoriteController);

export default router;
