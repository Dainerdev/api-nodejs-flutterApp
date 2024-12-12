import { Router } from "express";
import { methods as expensesController } from "../controllers/expenses.controller";

const router = Router();

// Routes
router.get("/list/:user_id", expensesController.getExpenses); // Find All
router.get("/:id", expensesController.getExpenseById); // Find By Id
router.get("/name/:user_id/:name", expensesController.getExpenseByName); // Find By Name
router.get("/total/:user_id", expensesController.getTotalExpenses); // Get Total

router.post("/", expensesController.addExpense); // Add user

router.put("/edit/:id", expensesController.updateExpense); // Edit user
router.delete("/:id", expensesController.deleteExpense); // Delete user

export default router;