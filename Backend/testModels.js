const mongoose = require("mongoose");
const Visit = require("./Models/Visit");

const uri = process.env.MONGO_URI || "mongodb+srv://jmtestor1:chile123@cluster0.mgx9h.mongodb.net/mi_base_de_datos?retryWrites=true&w=majority";

mongoose
  .connect(uri, { serverSelectionTimeoutMS: 5000 })
  .then(async () => {
    console.log("Conexión exitosa a MongoDB!");

    // Crear un nuevo documento en la colección `visits`
    const newVisit = new Visit({
      project: "Impermeabilización de techo",
      client: "63c19f6e4692bd2f4bfb1e4a", // Usa un ID válido de cliente
      description: "Se inspeccionó el techo para evaluar daños",
      status: "Pending",
    });

    const savedVisit = await newVisit.save();
    console.log("Visita creada:", savedVisit);

    // Finalizar conexión
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error al conectar o guardar:", err.message);
  });
