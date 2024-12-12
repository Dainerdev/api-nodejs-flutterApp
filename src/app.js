import express from "express";
import morgan from "morgan";
import cors from "cors";

// Routes
import usersRoutes from "./routes/users.routes";
import earningsRoutes from "./routes/earnings.routes";
import expensesRoutes from "./routes/expenses.routes";

const app = express();

// Settings
app.set("port", 3312);

// Middelwares (funciones entre una peticion y una respuesta)
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", usersRoutes);
app.use("/api/earnings", earningsRoutes);
app.use("/api/expenses", expensesRoutes);

export default app;