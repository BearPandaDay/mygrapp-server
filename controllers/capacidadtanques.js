const Capacidad = require('../models/capacidadtanques');
const {ObjectId} = require('mongodb')

async function postCapacidad(req, res) {
    try {
        const arrayData = req.body;

        // const userModel = arrayData.map(data => ({
        //     Usuario: data.dato1,
        //     Contrasena: data.dato2,
        //     Sector: data.dato3,
        //     Poliza: data.dato4,
        //     AnioEvaluado: data.dato5,
        //     Convenio: data.dato6,
        //     EstadoGrap: data.dato7
        // })) 

        const response = await Capacidad.create(arrayData);

        if (!response) return res.status(400).send({msg: "Error al guardar datos postUser", status: false});
        return res.status(201).send(response[0]);
    } catch(error) {
        if (error.code === 11000) return res.status(503).send({msg: "Error server user existe", status: false});

        return res.status(503).send({msg: "Error server postUser", status: false});
    }

}

async function getCapacidad(req, res) {
    try {
        const {_id} = req.query;
        
        const filter = {};
        if (_id) filter._id = _id;
        
        const documentos = await Capacidad.find(filter);
        res.status(200).send(documentos);
        
    } catch (err) {
        res.status(503).send({msg: "err", status: false});
        console.log("OCURRIO UN ERROR EN METODO GET");
    }
};


async function deleteCapacidad( req, res) {
    const id = req.body.id;

    if (!id) return res.status(403).send("Id Requerido");
    
    try {
        const result = await Capacidad.findOneAndDelete({ _id: id });

        if (!result) return res.status(404).send("Registro de capacidad no encontrado");
        return res.status(200).send(`Se ha eliminado la capacidad con identificacion ${id} con éxito`);
    } catch (err) {
        res.status(500).send(err.message);
        console.log("//        ¡Ocurrio un error!        //");
    }
};


// async function updateUser( req, res) {
//     try {
//         const {_id, update} = req.body;
//         if (!_id) return res.status(400).send({msg: "Id requerido", status: false});


//         return res.status(200).send(` Actualizacion exitosa`);
//         //update.description = description;

//         const responde = await User.findByIdAndUpdate(_id, update);
//         console.log("🚀 ~ updateUser ~ responde:", responde)
//     } catch(ërror) {
//         console.log("🚀 ~ updateUser ~ ërror:", ërror)
//     }
// }



module.exports = {
    postCapacidad,
    getCapacidad,
    deleteCapacidad,
}