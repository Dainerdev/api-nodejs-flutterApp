import { Router } from "express";
import { methods as usersController } from "../controllers/users.controller";

const router = Router();

// Routes
router.get("/", usersController.getUsers); // Find All
router.get("/:username", usersController.getUsersById); // Find By Id


export default router;