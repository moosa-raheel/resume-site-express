import { Router } from "express";
import { homeController } from "../controllers/homeController.js";
const router = Router();
router.get("/", homeController);

// Export Router
export default router;
