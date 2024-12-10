import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SchedulePage.css";
import Button from "../components/Button";
import Footer from "../components/footer";

function SchedulePage() {
  const [formData, setFormData] = useState({
    nomePet: "",
    data: "",
    time: "",
    tipoServico: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({
      nomePet: "",
      data: "",
      time: "",
      tipoServico: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio do agendamento para um banco de dados
    console.log("Agendamento:", formData);
    alert(
      `Serviço de ${formData.tipoServico} do (a) ${formData.nomePet} agendado com sucesso!`
    );
    resetForm();
  };

  const navigate = useNavigate();
  const handlerVoltar = () => {
    navigate("/home");
  };

  return (
    <section>
      <div className="schedule-page">
        <h1>Agendar Serviço</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nome do Pet:
            <input
              type="text"
              name="nomePet"
              value={formData.nomePet}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Data:
            <input
              type="date"
              name="data"
              value={formData.data}
              onChange={handleChange}
              required
            />
            </label>
            <label>
              Hora:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Tipo de Serviço:
            <select
              name="tipoServico"
              value={formData.tipoServico}
              onChange={handleChange}>
                <option value="" disabled>
                Escolha um serviço
              </option>
              <option value="Banho">Banho</option>
              <option value="Tosa">Tosa</option>
              <option value="Banho e Tosa">Banho e Tosa</option>
            </select>
          </label>
          <br />
          <button type="submit">Agendar</button>
        </form>
        <Button onClick={handlerVoltar}>Voltar para página principal</Button>
      </div>
      <Footer />
    </section>
  );
}

export default SchedulePage;
