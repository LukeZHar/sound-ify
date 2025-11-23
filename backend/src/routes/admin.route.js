import { Router } from "express";
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectRoutes, requireAdmin, createSong);

export default router;