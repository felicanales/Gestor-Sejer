const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ error: "No autorizado, falta el token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Añade los datos del token al objeto `req`
    next(); // Pasa al siguiente middleware o controlador
  } catch (err) {
    res.status(401).json({ error: "Token inválido o expirado" });
  }
};

module.exports = authMiddleware;
