import { useEffect, useState } from "react";
import api from "../services/api";

export default function ListarMatriculas() {
  const [matriculas, setMatriculas] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    carregarMatriculas();
  }, []);

  const carregarMatriculas = async (query = "") => {
    const res = await api.get(`/matriculas?search=${query}`);
    setMatriculas(res.data);
  };

  const handleSearch = () => {
    carregarMatriculas(search);
  };

  return (
    <div>
      <h1>Lista de Matrículas</h1>

      {/* PESQUISA */}
      <input
        placeholder="Pesquisar aluno..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handleSearch}>Pesquisar</button>

      <table border="1">
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Classe</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {matriculas.map((m) => (
            <tr key={m.id}>
              <td>{m.aluno}</td>
              <td>{m.classe}</td>
              <td>{new Date(m.data_matricula).toLocaleDateString()}</td>
              <td>{m.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}