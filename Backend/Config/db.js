//Config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error de conexión: ${err.message}`);
    process.exit(1); // Finaliza la app si falla la conexión
  }
};

module.exports = connectDB;
