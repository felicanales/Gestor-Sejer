const Client = require("../Models/Client");

// Registrar cliente
exports.createClient = async (req, res) => {
  try {
    const newClient = new Client(req.body);
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (err) {
    res.status(500).json({ error: "Error al registrar cliente" });
  }
};

// Validar cliente
exports.validateClient = async (req, res) => {
  try {
    const { email } = req.body;
    const client = await Client.findOne({ email });

    if (!client) return res.status(404).json({ error: "Cliente no encontrado" });

    client.verified = true;
    await client.save();

    res.status(200).json(client);
  } catch (err) {
    res.status(500).json({ error: "Error en validación de cliente" });
  }
};
