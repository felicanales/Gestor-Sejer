import React, { useEffect, useState } from "react";
import './Dashboard.css';
import { useNavigate } from "react-router-dom"; 

const Dashboard = () => {
  const [visits, setVisits] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const fetchVisits = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No se encontró un token en el almacenamiento local.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/visits", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al obtener visitas");
      }

      const data = await response.json();
      console.log("Datos de visitas obtenidos:", data);
      setVisits(data);
    } catch (error) {
      console.error("Error al obtener visitas:", error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchVisits();
  }, []); 

    // Función para manejar la redirección al talonario
    const handleNuevaVisita = () => {
      navigate("/nueva-visita");  // Redirige a la página de nueva visita
    };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Panel de Gestión</h1>
      {error && <div className="error-message">{error}</div>}
      {visits.length === 0 ? (
        <p className="no-visits-message">No hay visitas registradas.</p>
      ) : (
        <table className="visits-table">
          <thead>
            <tr>
              <th>Proyecto</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {visits.map((visit) => (
              <tr key={visit._id}>
                <td>{visit.project}</td>
                <td>{visit.client?.name || "Desconocido"}</td>
                <td>{new Date(visit.date).toLocaleDateString()}</td>
                <td className={`status-${visit.status.toLowerCase()}`}>{visit.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {/* Botón para redirigir al talonario */}
      <button className="new-visit-button" onClick={handleNuevaVisita}>
        Nueva visita a obra
      </button>
    </div>
  );
};

export default Dashboard;
