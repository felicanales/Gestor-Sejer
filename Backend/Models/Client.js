//Models/Client.js
const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  verified: { type: Boolean, default: false },
});

module.exports = mongoose.model("Client", clientSchema);
