import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./config/db.js";

import alunosRoutes from "./routes/alunos.routes.js";
import matriculasRoutes from "./routes/matriculas.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import authRoutes from "./routes/auth.routes.js";





dotenv.config();

const app = express();
app.use(errorHandler);

app.use(cors());
app.use(express.json());

// Rotas
app.use("/alunos", alunosRoutes);
app.use("/matriculas", matriculasRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Sistema Escolar API a funcionar 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor a rodar na porta ${PORT}`);
});