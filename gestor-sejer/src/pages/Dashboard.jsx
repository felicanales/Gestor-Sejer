import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [visits, setVisits] = useState([]);
  const [error, setError] = useState("");

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
      console.log("Datos de visitas obtenidos:", data); // Depuración
      setVisits(data);
    } catch (error) {
      console.error("Error al obtener visitas:", error.message);
    }
  };
  
  

  useEffect(() => {
    fetchVisits();
  }, []); // El array vacío asegura que se llama una vez, al montar el componente

  return (
    <div>
      <h1>Panel de Gestión</h1>
      {visits.length === 0 ? (
        <p>No hay visitas registradas.</p>
      ) : (
        <ul>
          {visits.map((visit) => (
            <li key={visit._id}>
              Proyecto: {visit.project} - Cliente: {visit.client?.name || "Desconocido"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
