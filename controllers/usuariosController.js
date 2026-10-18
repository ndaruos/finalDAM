const service = require('../services/usuariosService');

console.log("Controlador Usuarios");

const login = async (req, res) => {
    try {
        const { usuario, clave } = req.body;

        // Llamamos a la función login del servicio
        const resultado = await service.login(usuario, clave);

        res.json(resultado);
    } 
    catch(error) {
        res.status(500).json({ error: "Error al iniciar sesión." });
    }
};

module.exports = { login };