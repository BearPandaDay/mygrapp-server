const mongoose = require("mongoose");

const identificaciondelafuenteSchema = new mongoose.Schema({
  fuente: {
    type: String,
    required: true,
  },
  proveedor: {
    type: String,
    required: true,
  },
  observaciones: {
    type: String,
    required: true
  },
  iduser: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("identificaciondelafuente", identificaciondelafuenteSchema);
