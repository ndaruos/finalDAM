const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/librosController');

router.get('/', ctrl.obtenerTodos);

module.exports = router;
