import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    const fetchVisits = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/visits", {
        headers: { Authorization: token },
      });

      const data = await response.json();
      setVisits(data);
    };

    fetchVisits();
  }, []);

  return (
    <div>
      <h1>Panel de Gestión</h1>
      <ul>
        {visits.map((visit) => (
          <li key={visit._id}>
            Proyecto: {visit.project} - Cliente: {visit.client.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
