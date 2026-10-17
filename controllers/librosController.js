
const service = require('../services/librosService');

const obtenerTodos = (req,res) => {
    const libros = service.obtenerTodos();
    res.json(libros);
};

module.exports = { obtenerTodos };