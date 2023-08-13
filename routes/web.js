import { Router } from "express";
import { homeController } from "../controllers/homeController.js";
import { servicesController } from "../controllers/servicesController.js";
import { contactController } from "../controllers/contactController.js";
import { skillsController } from "../controllers/skillsController.js";
const router = Router();

// Routing
router.get("/", homeController);
router.get("/services", servicesController);
router.get("/contact", contactController);
router.get("/skills", skillsController);

// Export Router
export default router;
