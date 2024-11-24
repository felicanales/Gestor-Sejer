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
    const visits = await Visit.find().populate("client", "name email");
    res.status(200).json(visits);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener las visitas" });
  }
};
