import { Router } from "express";
import { methods as usersController } from "../controllers/users.controller";

const router = Router();

// Routes
router.get("/", usersController.getUsers);


export default router;