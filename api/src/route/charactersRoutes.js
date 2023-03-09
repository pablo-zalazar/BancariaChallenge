import { Router } from "express";
import { getAllCharactersController } from "../controller/characters/getAllCharactersController.js";
import { getOneCharacterController } from "../controller/characters/getOneCharacterController.js";

const router = Router();

router.get("/", getAllCharactersController);
router.get("/:id", getOneCharacterController);

export default router;
