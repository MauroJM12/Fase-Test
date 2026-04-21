import { useEffect, useState } from "react";
import api from "../services/api";

export default function Matriculas() {
  const [alunos, setAlunos] = useState([]);
  const [classes, setClasses] = useState([]);

  const [form, setForm] = useState({
    aluno_id: "",
    classe_id: "",
    data_matricula: "",
    status: "ativa"
  });

  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    const resAlunos = await api.get("/alunos");
    setAlunos(resAlunos.data);

    const resClasses = await api.get("/classes");
    setClasses(resClasses.data);
  };

  const criarMatricula = async () => {
    try {
      await api.post("/matriculas", form);

      setMensagem("Matrícula realizada com sucesso!");

      setForm({
        aluno_id: "",
        classe_id: "",
        data_matricula: "",
        status: "ativa"
      });
    } catch (err) {
      setMensagem("Erro ao realizar matrícula");
    }
  };

  return (
    <div>
      <h1>Matrícula de Alunos</h1>

      {mensagem && <p>{mensagem}</p>}

      {/* SELECT ALUNO */}
      <select
        value={form.aluno_id}
        onChange={(e) =>
          setForm({ ...form, aluno_id: e.target.value })
        }
      >
        <option>Selecionar Aluno</option>
        {alunos.map((a) => (
          <option key={a.id} value={a.id}>
            {a.nome}
          </option>
        ))}
      </select>

      {/* SELECT CLASSE */}
      <select
        value={form.classe_id}
        onChange={(e) =>
          setForm({ ...form, classe_id: e.target.value })
        }
      >
        <option>Selecionar Classe</option>
        {classes.map((c) => (
          <option key={c.id} value={c.id}>
            {c.nome}
          </option>
        ))}
      </select>

      {/* DATA */}
      <input
        type="date"
        value={form.data_matricula}
        onChange={(e) =>
          setForm({ ...form, data_matricula: e.target.value })
        }
      />

      <button onClick={criarMatricula}>
        Realizar Matrícula
      </button>
    </div>
  );
}