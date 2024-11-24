const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization"); // Leer el encabezado Authorization
  console.log("Encabezado Authorization recibido:", authHeader); // Para depuración

  if (!authHeader) {
    return res.status(401).json({ error: "No autorizado, falta el token" });
  }

  const token = authHeader.split(" ")[1]; // Extraer el token después de "Bearer"
  if (!token) {
    return res.status(401).json({ error: "Token no válido" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verificar el token
    req.user = decoded; // Adjuntar el usuario decodificado al objeto req
    next(); // Continuar al siguiente middleware o controlador
  } catch (err) {
    console.error("Error al verificar el token:", err.message);
    res.status(401).json({ error: "Token inválido o expirado" });
  }
};

module.exports = authMiddleware;
