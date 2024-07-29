const express = require('express');
const capacidadController = require('../controllers/capacidadtanques');

const api = express.Router();

api.post("/CapacidadT", capacidadController.postCapacidad);
api.get("/CapacidadT", capacidadController.getCapacidad);
api.delete("/CapacidadT", capacidadController.deleteCapacidad);
// api.put("/client", userController.updateUser);

module.exports = api;