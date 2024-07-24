const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


//importacion de rutas
const usuarios = require("./rutas/usuarios");
const auth = require("./rutas/auth");
const identificaciondelafuente = require("./rutas/identificaciondelafuente");


// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//seguridad entre front y backend
app.use(cors());


//configuracion rutas
app.use("/api/v1", usuarios);
app.use("/api/v1", auth);
app.use("/api/v1", identificaciondelafuente);


module.exports = app;
