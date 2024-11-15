import express from "express";
import morgan from "morgan";

// Routes
import usersRoutes from "./routes/users.routes";

const app = express();

// Settings
app.set("port", 3312);

// Middelwares (funciones entre una peticion y una respuesta)
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/users", usersRoutes);

export default app;