import { useEffect, useState } from "react";
import api from "../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";



export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    carregarStats();
  }, []);

  const carregarStats = async () => {
    const res = await api.get("/dashboard/stats");
    setStats(res.data);
  };

  const [dados, setDados] = useState([]);

useEffect(() => {
  carregarGrafico();
}, []);

const carregarGrafico = async () => {
  const res = await api.get("/dashboard/grafico");
  setDados(res.data);
};

<BarChart width={500} height={300} data={dados}>
  <XAxis dataKey="classe" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="total" />
</BarChart>

  if (!stats) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <h3>Alunos</h3>
          <p>{stats.total_alunos}</p>
        </div>

        <div>
          <h3>Matrículas</h3>
          <p>{stats.total_matriculas}</p>
        </div>

        <div>
          <h3>Ativas</h3>
          <p>{stats.matriculas_ativas}</p>
        </div>

        <div>
          <h3>Classes</h3>
          <p>{stats.total_classes}</p>
        </div>
      </div>
    </div>
  );
}