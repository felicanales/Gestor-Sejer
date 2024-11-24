const Visit = require("../Models/Visit");

exports.createVisit = async (req, res) => {
  try {
    const newVisit = new Visit(req.body);
    const savedVisit = await newVisit.save();
    res.status(201).json(savedVisit);
  } catch (err) {
    res.status(500).json({ error: "Error al crear la visita" });
  }
};

exports.getVisits = async (req, res) => {
  try {
    const visits = await Visit.find().populate("client", "name email"); // Poblar el cliente
    res.status(200).json(visits); // Devolver las visitas
  } catch (err) {
    console.error("Error al obtener visitas:", err.message);
    res.status(500).json({ error: "Error al obtener visitas" });
  }
};
