import morgan from "morgan";

// Routes

const app = express();

// Settings
app.set("port", 3312);

// Middelwares (funciones entre una peticion y una respuesta)
app.use(morgan("dev"));

// Routes

export default app;