const express = require('express');
const mant = require('../controllers/mantenimientoTanques');

const api = express.Router();

api.post("/MantenimientoT", mant.postMantenimiento);
api.get("/MantenimientoT", mant.getMantenimiento);
api.delete("/MantenimientoT", mant.deleteMantenimiento);
// api.put("/MantenimientoT", mant.updateMantenimiento);

module.exports = api;