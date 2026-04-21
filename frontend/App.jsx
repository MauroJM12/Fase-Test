import Alunos from "./pages/Alunos";
import Matriculas from "./pages/Matriculas";
import ListarMatriculas from "./pages/ListarMatriculas";
import { useEffect, useState } from "react";
import api from "../services/api";
import Dashboard from "./pages/Dashboard";
import Matriculas from "./pages/Matriculas";
import ListarMatriculas from "./pages/ListarMatriculas";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";





export default App;

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    data_nascimento: "",
    genero: "",
    contacto: "",
    endereco: ""
  });

  function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", width: "100%" }}>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;

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

function App() {
  return (
    <div>
      <Matriculas />
    </div>
  );
}

function App() {
  return (
    <div>
      <Dashboard />
      <hr />
      <Matriculas />
      <hr />
      <ListarMatriculas />
    </div>
  );
}

function App() {
  return (
    <div>
      <Matriculas />
      <hr />
      <ListarMatriculas />
    </div>
  );
}

export default App;

export default App;

function App() {
  return (
    <div>
      <Alunos />
    </div>
  );
}

export default App;