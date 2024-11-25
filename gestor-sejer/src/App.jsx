import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginHeader from './components/LoginHeader/LoginHeader';
import Home from './pages/Home'; // Asegúrate de que la ruta sea correcta
import Register from './pages/Register'; // Asegúrate de que la ruta sea correcta
import Dashboard from './pages/Dashboard'; // Importa el componente Dashboard
import NuevaVisita from "./pages/NuevaVisita"; 

const App = () => {
  return (
    <Router>
      <div>
        <LoginHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Nueva ruta para Dashboard */}
            <Route path="/nueva-visita" element={<NuevaVisita />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
