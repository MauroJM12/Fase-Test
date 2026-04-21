import { db } from "../config/db.js";

// Criar aluno
export const criarAluno = (req, res) => {
  const { nome, data_nascimento, genero, contacto, endereco } = req.body;

  const sql = `
    INSERT INTO alunos (nome, data_nascimento, genero, contacto, endereco)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [nome, data_nascimento, genero, contacto, endereco],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.status(201).json({
        message: "Aluno criado com sucesso",
        id: result.insertId
      });
    }
  );
};

// Listar alunos
export const listarAlunos = (req, res) => {
  const sql = "SELECT * FROM alunos";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(results);
  });
};