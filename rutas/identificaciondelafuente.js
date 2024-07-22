const express = require('express');
const identificaciondelafuenteController = require('../controllers/identificaciondelafuente');

const api = express.Router();

api.post("/identificaciondelafuente", identificaciondelafuenteController.postIdentificaciondelafuente);
// api.get("/client", identificaciondelafuenteController.getUser);
// api.delete("/client", identificaciondelafuenteController.deleteUser);
// api.put("/client", identificaciondelafuenteController.updateUser);

module.exports = api;