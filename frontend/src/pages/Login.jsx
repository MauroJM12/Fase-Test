import { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, senha });

      localStorage.setItem("token", res.data.token);

      alert("Login feito com sucesso!");
    } catch {
      alert("Erro no login");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}