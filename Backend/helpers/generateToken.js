//helpers/generateToken.js
const jwt = require("jsonwebtoken");

// Generar el token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

module.exports = generateToken;
