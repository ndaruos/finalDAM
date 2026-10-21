
const service = require('../services/librosService');

console.log("Controlador")

const obtenerTodos = async (req,res) => {

    try {
        const libros = await service.obtenerTodos();
        return res.json(libros);
    } 
    catch(error){

        return res.status(500).json({error:"Error al obtener todos los libros."})
    }
};

const crear = async (req,res) => {

    try {
        const libros = await service.crear(req.body);
        return res.status(200).json(libros);
    } 
    catch(error){

        return res.status(500).json({error:"Error al crear el libro."})
    }
};

const actualizar = async(req,res) => {

    try{
        const libroActualizado = await service.actualizar(req.body)
        return res.status(200).json(libroActualizado)
 
    } catch(error){

        return res.status(500).json({error: 'Error al actualizar el libro.'})
    }    
}


module.exports = { obtenerTodos, crear, actualizar };