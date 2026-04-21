import { db } from "../config/db.js";

// Criar matrícula
export const criarMatricula = (req, res) => {
  const { aluno_id, classe_id, data_matricula, status } = req.body;

  const sql = `
    INSERT INTO matriculas (aluno_id, classe_id, data_matricula, status)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [aluno_id, classe_id, data_matricula, status],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json({
        message: "Matrícula criada com sucesso",
        id: result.insertId
      });
    }
  );
};

// Listar matrículas
export const listarMatriculas = (req, res) => {
  const { search } = req.query;

  let sql = `
    SELECT m.id, a.nome AS aluno, c.nome AS classe, m.data_matricula, m.status
    FROM matriculas m
    JOIN alunos a ON m.aluno_id = a.id
    JOIN classes c ON m.classe_id = c.id
  `;

  if (search) {
    sql += ` WHERE a.nome LIKE ?`;
  }

  db.query(sql, search ? [`%${search}%`] : [], (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};