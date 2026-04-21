import { db } from "../config/db.js";

export const getStats = (req, res) => {
  const query = `
    SELECT
      (SELECT COUNT(*) FROM alunos) AS total_alunos,
      (SELECT COUNT(*) FROM matriculas) AS total_matriculas,
      (SELECT COUNT(*) FROM matriculas WHERE status = 'ativa') AS matriculas_ativas,
      (SELECT COUNT(*) FROM classes) AS total_classes
  `;

  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result[0]);
  });
};