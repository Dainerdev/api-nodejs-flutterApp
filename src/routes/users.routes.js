import { Router } from "express";
import { methods as usersController } from "../controllers/users.controller";

const router = Router();

// Routes
router.get("/", usersController.getUsers); // Find All
router.get("/:username", usersController.getUsersById); // Find By Id
router.post("/", usersController.addUsers); // Add user


export default router;