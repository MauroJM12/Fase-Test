import { useEffect, useState } from "react";
import api from "../services/api";

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    data_nascimento: "",
    genero: "",
    contacto: "",
    endereco: ""
  });

  useEffect(() => {
    carregarAlunos();
  }, []);

  const carregarAlunos = async () => {
    const res = await api.get("/alunos");
    setAlunos(res.data);
  };

  const criarAluno = async () => {
    await api.post("/alunos", form);
    carregarAlunos();
    setForm({
      nome: "",
      data_nascimento: "",
      genero: "",
      contacto: "",
      endereco: ""
    });
  };

  return (
    <div>
      <h1>Gestão de Alunos</h1>

      <input
        placeholder="Nome"
        value={form.nome}
        onChange={(e) => setForm({ ...form, nome: e.target.value })}
      />

      <input
        placeholder="Data Nascimento"
        type="date"
        value={form.data_nascimento}
        onChange={(e) => setForm({ ...form, data_nascimento: e.target.value })}
      />

      <input
        placeholder="Gênero"
        value={form.genero}
        onChange={(e) => setForm({ ...form, genero: e.target.value })}
      />

      <input
        placeholder="Contacto"
        value={form.contacto}
        onChange={(e) => setForm({ ...form, contacto: e.target.value })}
      />

      <input
        placeholder="Endereço"
        value={form.endereco}
        onChange={(e) => setForm({ ...form, endereco: e.target.value })}
      />

      <button onClick={criarAluno}>Criar Aluno</button>

      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map((a) => (
          <li key={a.id}>
            {a.nome} - {a.contacto}
          </li>
        ))}
      </ul>
    </div>
  );
}