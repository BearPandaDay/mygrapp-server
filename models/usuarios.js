const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  NombreEmpresa: {
    type: String,
    required: true,
  },
  Usuario: {
    type: String,
    required: true,
    uniqued: true
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
    required: false,
    default: 2023.2024,
  },
  Convenio: {
    type: String,
    required: false,
    default: "abcdefg",
  },
  EstadoGrap: {
    type: Number,
    required: false,
    default: 12345,
  },
  Direccion: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("User", userSchema);

