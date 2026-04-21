import express from "express";
import {
  criarMatricula,
  listarMatriculas
} from "../controllers/matriculas.controller.js";

const router = express.Router();

router.post("/", criarMatricula);
router.get("/", listarMatriculas);

export default router;