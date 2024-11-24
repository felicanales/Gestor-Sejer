//Routes/authRoutes.js
const express = require("express");
const { register, login } = require("../Controllers/authController");

const router = express.Router();

router.post("/register", register); // Registrar usuario
router.post("/login", login);       // Iniciar sesión

module.exports = router;
