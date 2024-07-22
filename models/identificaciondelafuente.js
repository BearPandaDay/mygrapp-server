const mongoose = require("mongoose");

const identificaciondelafuenteSchema = new mongoose.Schema({
  fuente: {
    type: Object,
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
