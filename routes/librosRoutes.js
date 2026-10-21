const express = require('express');

console.log("Rutas")

const router = express.Router();

const ctrl = require('../controllers/librosController');

router.get('/', ctrl.obtenerTodos);
router.post('/crear', ctrl.crear);
router.put('/actualizar', ctrl.actualizar);

module.exports = router;
