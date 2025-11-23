import { Router } from "express";
import { createSong } from "../controllers/admin.controller.js";
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/songs", protectRoutes, requireAdmin, createSong);

export default router;
