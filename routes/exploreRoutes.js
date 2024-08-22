import { Router } from "express";
import { explorePopularRepos } from "../controllers/exploreController.js";

const router = Router();

router.get("/:language",explorePopularRepos);

export default router;