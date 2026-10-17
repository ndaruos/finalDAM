const express = require('express');

console.log("Rutas")

const router = express.Router();

const ctrl = require('../controllers/librosController');

router.get('/', ctrl.obtenerTodos);

module.exports = router;
