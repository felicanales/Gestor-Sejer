//Routes/visitRoutes.js
const express = require("express");
const { createVisit, getVisits } = require("../Controllers/visitController");
const authMiddleware = require("../middleware/authMiddleware");


const router = express.Router();

router.post("/", authMiddleware, createVisit); // Crear visita
router.get("/", authMiddleware, getVisits);    // Obtener visitas

module.exports = router;
