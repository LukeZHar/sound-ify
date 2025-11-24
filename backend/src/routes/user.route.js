import { Router } from "express";
import { getAllUsers } from "../controllers/user.controller.js";
import { protectRoutes } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/", protectRoutes, getAllUsers);
// TODO: getMessages

export default router;