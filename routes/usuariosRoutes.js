const express = require('express');

console.log("Rutas Usuarios");

const router = express.Router();

const ctrl = require('../controllers/usuariosController');

router.post('/login', ctrl.login);

module.exports = router;