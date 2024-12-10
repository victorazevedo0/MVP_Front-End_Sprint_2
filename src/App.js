import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPages from './pages/LoginPages';
import HomePage from './pages/HomePage';
import SchedulePage from './pages/SchedulePage';
import ScheduledServicesPage from './pages/ScheduledServicesPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPages />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/agendar" element={<SchedulePage />} />
          <Route path="/servicos-agendados" element={<ScheduledServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;