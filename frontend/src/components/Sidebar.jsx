export default function Sidebar() {
  return (
    <div style={{
      width: "200px",
      height: "100vh",
      background: "#1e293b",
      color: "#fff",
      padding: "20px"
    }}>
      <h2>Sistema</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>Dashboard</li>
        <li>Alunos</li>
        <li>Matrículas</li>
        <li>Lista</li>
      </ul>
    </div>
  );
}