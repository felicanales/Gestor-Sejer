//Models/Visit.js
const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  project: { type: String, required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  date: { type: Date, default: Date.now },
  description: { type: String },
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
});

module.exports = mongoose.model("Visit", visitSchema);
