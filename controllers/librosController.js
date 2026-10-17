
const service = require('../services/librosService');

console.log("Controlador")

const obtenerTodos = async (req,res) => {

    try {
        const libros = await service.obtenerTodos();
        res.json(libros);
    } 
    catch(error){

        res.status(500).json({error:"Error al obtener todos los libros."})
    }
};


module.exports = { obtenerTodos };