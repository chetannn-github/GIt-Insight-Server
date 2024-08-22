import { Router } from "express";
import { getLikes, getUserProfileAndRepos, likeProfile } from "../controllers/userController.js";

const router = Router();

router.get("/profile/:username",getUserProfileAndRepos);
router.get("/likes",getLikes);
router.post("/likes/:username",likeProfile);

export default router