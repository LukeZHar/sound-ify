import { Router } from "express";
import { getAllUsers, getMessages } from "../controllers/user.controller.js";
import { protectRoutes } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectRoutes, getAllUsers);
router.get("/messages/:userId", protectRoutes, getMessages)

export default router;