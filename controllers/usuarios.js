const User = require('../models/usuarios');
const {ObjectId} = require('mongodb')

async function postUser(req, res) {
    const arrayData = req.body;

    const userModel = arrayData.map(data => ({
        Usuario: data.dato1,
        Contrasena: data.dato2,
        Sector: data.dato3,
        Poliza: data.dato4,
        AnioEvaluado: data.dato5,
        Convenio: data.dato6,
        EstadoGrap: data.dato7
    }))

    const response = await User.create(userModel);
    console.log("🚀 ~ postUser ~ response:", response);

    
}

async function getUser(req, res) {
    try {
        const documentos = await User.find({});
        res.status(200).send(documentos);
        console.log("METODO GET EJECUTADO CORRECTAMENTE");
        
    } catch (err) {
        res.status(500).send(err);
        console.log("OCURRIO UN ERROR EN METODO GET");
    }
};


async function deleteUser( req, res) {
    const id = req.body.id;

    if (!id) return res.status(403).send("Id Requerido");
    
    try {
        const result = await User.findOneAndDelete({ _id: id });

        if (!result) return res.status(404).send("Registro no encontrado");
        return res.status(200).send(`Se ha eliminado el cliente con ID ${id} con éxito`);
    } catch (err) {
        res.status(500).send(err.message);
        console.log("//        ¡Ocurrio un error!        //");
    }
};


async function updateUser( req, res) {
    try {
        const {_id, update} = req.body;
        if (!_id) return res.status(400).send({msg: "Id requerido", status: false});


        return res.status(200).send(` Actualizacion exitosa`);
        //update.description = description;

        const responde = await User.findByIdAndUpdate(_id, update);
        console.log("🚀 ~ updateUser ~ responde:", responde)
    } catch(ërror) {
        console.log("🚀 ~ updateUser ~ ërror:", ërror)
    }
}
module.exports = {
    postUser,
    getUser,
    deleteUser,
    updateUser,
}