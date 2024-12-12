import { Router } from "express";
import { methods as earningsController } from "../controllers/earnings.controller";

const router = Router();

// Routes
router.get("/list/:user_id", earningsController.getEarnings); // Find All
router.get("/:id", earningsController.getEarningById); // Find By Id
router.get("/name/:user_id/:name", earningsController.getEarningByName); // Find By Name
router.get("/total/:user_id", earningsController.getTotalEarnings); // Get Total

router.post("/", earningsController.addEarning); // Add user

router.put("/edit/:id", earningsController.updateEarning); // Edit user
router.delete("/:id", earningsController.deleteEarning); // Delete user

export default router;