//index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./Config/db");
const app = express();


// Conectar a MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/auth", require("./Routes/authRoutes"));
app.use("/api/visits", require("./Routes/visitRoutes"));
app.use("/api/clients", require("./Routes/clientRoutes"));

// Servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
