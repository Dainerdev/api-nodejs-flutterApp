import { Router } from "express";
import { methods as usersController } from "../controllers/users.controller";

const router = Router();

// Routes
router.get("/", usersController.getUsers); // Find All
router.get("/:id", usersController.getUserById); // Find By Id

router.post("/", usersController.addUser); // Add user
router.post("/login", usersController.loginValidation); // Login Validation

router.put("/edit/:id", usersController.updateUser); // Edit user
router.delete("/:id", usersController.deleteUser); // Delete user

export default router;