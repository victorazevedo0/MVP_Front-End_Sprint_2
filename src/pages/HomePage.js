import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import Button from '../components/Button';
import Footer from '../components/footer';

function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div className="home-page">
      <div className="sidebar">
        <ul>
          <li><Link to="/agendar">Agendar Serviço</Link></li>
          <li><Link to="/servicos-agendados">Ver Serviços Agendados</Link></li>
        </ul>
        <Button className="logout-btn" onClick={handleLogout}>Sair</Button>
      </div>
      <div className="content">
        <h1>Bem-vindo ao Petshop</h1>
        <p>Seu lugar para agendar serviços de banho e tosa!</p>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
