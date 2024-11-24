const express = require("express");
const { createClient, validateClient } = require("../Controllers/clientController");

const router = express.Router();

// Registrar cliente
router.post("/", createClient);

// Validar cliente
router.post("/validate", validateClient);

module.exports = router;
