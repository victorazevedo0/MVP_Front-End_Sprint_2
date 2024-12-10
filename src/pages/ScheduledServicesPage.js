import React, { useState } from "react";
import dadosAgendamentos from "../agendamentos.json"; //caso queira usar mais de 3 cards na pagina, só ir acrescentando o numero de cards no json
import { useNavigate } from "react-router-dom";
import AgendamentoCard from "../components/AgendamentoCard";
import "../styles/ScheduledServicesPage.css";
import Button from "../components/Button";
import Footer from "../components/footer";

export default function ScheduledServicesPage() {
  const [agendamentos, setAgendamentos] = useState( //não estou usando o setAgendamentos no momento, mas a ideia futura para esse software é efetuar a alteração ou exclusao de algum agendamento
    dadosAgendamentos.scheduling
  );
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate("/home");
  };

  return (
    <div className="scheduled-service-page">
      <main className="content">
        <h1>Serviços Agendados</h1>
        {agendamentos.length === 0 ? (
          <p>Nenhum serviço agendado.</p>
        ) : (
          <div className="agendamentos-list">
            {agendamentos.map((agendamento) => (
              <AgendamentoCard key={agendamento.id} agendamento={agendamento} />
            ))}
          </div>
        )}
        <Button onClick={handleVoltar} className="voltar-btn">Voltar para página principal</Button>
      </main>
      <Footer />
    </div>
  );
}
