const Mantenimiento = require('../models/mantenimientoTanques');
const {ObjectId} = require('mongodb')

async function postMantenimiento(req, res) {
    try {
        const arrayData = req.body;



        const response = await Mantenimiento.create(arrayData);

        if (!response) return res.status(400).send({msg: "Error al guardar datos postMantenimiento", status: false});
        console.log("Datos de mantenimiento guardados correctamente:", arrayData);
        return res.status(201).send({ msg: "Datos guardados correctamente", data: response[0], arrayData});


        // return res.status(201).send(response[0]);
    } catch(error) {
        if (error.code === 11000) return res.status(503).send({msg: "Error server en Mantenimiento", status: false});

        return res.status(503).send({msg: "Error server postMantenimiento", status: false});
    }

}


async function getMantenimiento(req, res) {
    try {
        const {_id} = req.query;
        
        const filter = {};
        if (_id) filter._id = _id;
        
        const documentos = await Mantenimiento.find(filter);
        res.status(200).send(documentos);
        console.log("metodo get ejecutado correctamente");
    
    } catch (err) {
        res.status(503).send({msg: "err", status: false});
        console.log("OCURRIO UN ERROR EN METODO GET");
    }
};


async function deleteMantenimiento( req, res) {
    const id = req.body.id;

    if (!id) return res.status(403).send("Id Requerido");
    
    try {
        const result = await Mantenimiento.findOneAndDelete({ _id: id });

        if (!result) return res.status(404).send("Registro no encontrado");
        
        console.log("Se ha eliminado el geristro de mantenimiento con éxito");
        return res.status(200).send(`Se ha eliminado el geristro de mantenimiento con ID ${id} con éxito`);
    } catch (err) {
        res.status(500).send(err.message);
        console.log("//        ¡Ocurrio un error!        //");
    }
};


// async function updateMantenimiento( req, res) {
//     try {
//         const {_id, update} = req.body;
//         console.log("🚀 ~ updateMantenimiento ~ req.body:", req.body)
//         if (!_id) return res.status(400).send({msg: "Id requerido", status: false});


//         //update.description = description;
        
//         //const response = await Mantenimiento.findByIdAndUpdate(_id, update);
//         console.log(response)
//         // return res.status(200).send(` Actualizacion exitosa`);
//     } catch(ërror) {
//         console.log("🚀 ~ updateUser ~ ërror:", ërror)
//     }
// }


module.exports = {
    postMantenimiento,
    getMantenimiento,
    deleteMantenimiento,
    // updateMantenimiento
}