import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/auth.js";
import { checkRole } from "../middleware/role.js";

// Só admin pode criar utilizadores
router.post(
  "/utilizadores",
  verifyToken,
  checkRole(["admin"]),
  criarUtilizador
);

// Funcionário e admin podem matricular
router.post(
  "/matriculas",
  verifyToken,
  checkRole(["admin", "funcionario"]),
  criarMatricula
);

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "Token não fornecido" });
  }

  try {
    const decoded = jwt.verify(token, "segredo_super");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token inválido" });
  }
};