import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginHeader from './components/LoginHeader/LoginHeader';
import Home from './pages/Home'; // Asegúrate de que la ruta sea correcta
import Register from './pages/Register'; // Importa el componente de Register


const App = () => {
  return (
    <Router>
      <div>
        <LoginHeader />
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Home />} /> 
            <Route path="/register" element={<Register />} /> {/* Ruta para el registro */}

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
