import React, { useState, useEffect } from "react";
import Button from "../components/Button"

const AgendamentoCard = ({ agendamento }) => {
  // Estado para controlar o status do agendamento
  const [status, setStatus] = useState("pendente");

  // Usando useEffect para mudar o status automaticamente após algum tempo ou evento
  useEffect(() => {
    if (status === "em andamento") {
      // Simulando a conclusão do agendamento após 3 segundos
      setTimeout(() => {
        setStatus("atendido");
      }, 3000); // Espera 3 segundos
    }
  }, [status]); // Esse efeito será acionado sempre que o status mudar

  // Função para voltar ao status "aguardando atendimento"
  const handleVoltarAguardando = () => {
    setStatus("pendente");
  };

  // Função para marcar como "em andamento"
  const handleEmAndamento = () => {
    setStatus("em andamento");
  };

  // Função para marcar como "atendido"
  const handleAtendido = () => {
    setStatus("atendido");
  };

  // Função para voltar o status de "atendido" para "pendente" (aguardando atendimento)
  const handleVoltarAtendido = () => {
    setStatus("pendente");
  };

  return (
    <div className={`agendamento-card ${status}`}>
      <h3>Nome do Pet: {agendamento.nomePet}</h3>
      <p><strong>Data:</strong> {agendamento.data}</p>
      <p><strong>Hora:</strong> {agendamento.hora}</p>
      <p><strong>Serviço:</strong> {agendamento.tipoServico}</p>
      <p><strong>Status:</strong> {status}</p>
      
      {status === "pendente" && (
        <div>
          <Button onClick={handleEmAndamento}>Marcar como em andamento</Button>
        </div>
      )}

      {status === "em andamento" && (
        <div>
          <Button onClick={handleAtendido}>Marcar como atendido</Button>
          <Button onClick={handleVoltarAguardando}>Voltar para aguardando atendimento</Button>
        </div>
      )}

      {status === "atendido" && (
        <div>
          <p>Agendamento atendido!</p>
          <Button onClick={handleVoltarAtendido}>Voltar para aguardando atendimento</Button>
        </div>
      )}
    </div>
  );
};

export default AgendamentoCard;
