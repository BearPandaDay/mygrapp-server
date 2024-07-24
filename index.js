const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 5500;

// const mongoURL = "mongodb+srv://algutierrez:123456alvaro@mongodb1.cmk79uu.mongodb.net/clientes";
const mongoURL = "mongodb://localhost:27017/prueba";

mongoose.connect(mongoURL)
    .then(() => {
        console.log("==============================>  Conectado a MongoDB")
        app.listen(port, () => {
            console.log("");
            console.log("====================================================");
            console.log("|| el servidor está escuchando en localhost:", port, "||");
            console.log("====================================================");
            console.log("");
        })
    })
    .catch((err) => console.error("¡¡¡¡¡¡ Error de conexión a MongoDB: ", err));


