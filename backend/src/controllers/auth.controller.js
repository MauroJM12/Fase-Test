import { db } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
import { login, register } from "../controllers/auth.controller.js";



// REGISTAR
export const register = async (req, res) => {
  const { nome, email, senha, role } = req.body;

  const hashedPassword = await bcrypt.hash(senha, 10);

  const sql = `
    INSERT INTO utilizadores (nome, email, senha, role)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [nome, email, hashedPassword, role], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Utilizador criado" });
  });
};

const router = express.Router();

router.post("/login", login);
router.post("/register", register);

export default router;

// LOGIN
export const login = (req, res) => {
  const { email, senha } = req.body;

  const sql = "SELECT * FROM utilizadores WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length === 0) {
      return res.status(404).json({ message: "Utilizador não encontrado" });
    }

    const user = result[0];

    const valid = await bcrypt.compare(senha, user.senha);

    if (!valid) {
      return res.status(401).json({ message: "Senha inválida" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      "segredo_super",
      { expiresIn: "1h" }
    );

    res.json({ token });
  });
};