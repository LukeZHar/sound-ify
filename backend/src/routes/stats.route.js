import { Router } from "express";
import { getStats } from "../controllers/stats.controller.js";
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectRoutes, requireAdmin, getStats);

export default router;
