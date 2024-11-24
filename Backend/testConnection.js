const mongoose = require("mongoose");

const uri = "mongodb+srv://jmtestor1:chile123@cluster0.mgx9h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("Conexión exitosa a MongoDB!");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err.message);
  });
