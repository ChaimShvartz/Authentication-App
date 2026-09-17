import { Router } from "express";
import { getUserProfile } from "../controllers.js/usersController.js";

const router = Router();

router.get('/profile', getUserProfile)

export default router;
