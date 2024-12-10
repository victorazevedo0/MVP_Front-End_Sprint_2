import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../usuarios.json";
import "../styles/LoginPages.css";
import Button from "../components/Button";
import Footer from "../components/footer";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [usuario] = useState(users.usuarios); // Obtendo os usuários do JSON
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Verifica se existe um usuário correspondente no JSON
    const user = usuario.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setError("");
      navigate("/home"); // Redireciona para a página "Home"
    } else {
      setError("Usuário ou senha inválidos.");
    }
  };

  return (
    <section>
      <div className="login-page">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <Button type="submit" className="login-button">
            Entrar
          </Button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
      <Footer />
    </section>
  );
}

export default LoginPage;
