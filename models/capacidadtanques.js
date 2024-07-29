const mongoose = require("mongoose");

const capacidadtanqueSchema = new mongoose.Schema({
  NumeroComidas: {
    type: Number,
    required: false,
  },
  EstimacionConsumo: {
    type: Number,
    required: false,
  },
  CapacidadTanque: {
    type: Number,
    required: false,
  },
  Anio: {
    type: Number,
    required: false,
  },

  NivelCapacidad: {
    type: Number,
    required: false,
  },
  ResultadoEvaluacion: {
    type: Number,
    required: false,
  },
  AlertaMedida: {
    type: String,
  }
});

module.exports = mongoose.model("Capacidad", capacidadtanqueSchema);