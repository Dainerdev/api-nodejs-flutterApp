import { Router } from "express";
import { methods as usersController } from "../controllers/users.controller";

const router = Router();

// Routes
router.get("/", usersController.getUsers); // Find All
router.get("/:id", usersController.getUsersById); // Find By Id
router.post("/", usersController.addUsers); // Add user
router.put("/:id", usersController.updateUser); // Edit user


export default router;