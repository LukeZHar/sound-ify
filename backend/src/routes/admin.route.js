import { Router } from "express";
import { createSong, deleteSong } from "../controllers/admin.controller.js";
import { protectRoutes, requireAdmin } from "../middleware/auth.middleware.js";
import { createAlbum, deleteAlbum } from "../controllers/admin.controller.js";

const router = Router();

router.post("/songs", protectRoutes, requireAdmin, createSong);
router.delete("/songs/:id", protectRoutes, requireAdmin, deleteSong);

router.post("/albums", protectRoutes, requireAdmin, createAlbum);
router.delete("/albums/:id", protectRoutes, requireAdmin, deleteAlbum);



export default router;
