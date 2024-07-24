const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  
  Usuario: {
    type: String,
    required: true,
  },
  Contrasena: {
    type: String,
    required: true,
  },
  Sector: {
    type: String,
    required: true,
  },
  Poliza: {
    type: Number,
    required: true,
  },
  AnioEvaluado: {
    type: Number,
    required: true,
  },
  Convenio: {
    type: String,
    required: true,
  },
  EstadoGrap: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);

