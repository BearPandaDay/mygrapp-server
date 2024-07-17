const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();


//importacion de rutas
const usuarios = require("./rutas/usuarios");


// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//seguridad entre front y backend
app.use(cors());


//configuracion rutas
app.use("/api/v1", usuarios);


module.exports = app;
