import { Router } from "express";
import { getLocationsController } from "../controller/locations/getLocationsController.js";
import { locationCharactersController } from "../controller/locations/locationCharactersController.js";

const router = Router();

router.get("/", getLocationsController);
router.get("/filter/:location", locationCharactersController);

export default router;
