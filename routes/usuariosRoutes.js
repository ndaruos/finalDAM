const express = require('express');

console.log("Rutas Usuarios");

const router = express.Router();

const ctrl = require('../controllers/usuariosController');

router.post('/', ctrl.login);

module.exports = router;