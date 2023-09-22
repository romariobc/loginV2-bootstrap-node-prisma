const express = require('express');
const usuarioRoute = express.Router();
const usuarioController = require('../Controller/usuarioController.js');



usuarioRoute.get('/usuarios', usuarioController.buscar);
usuarioRoute.post('/usuarios', usuarioController.criar);
usuarioRoute.post('/usuarios/login', usuarioController.login);

module.exports = usuarioRoute;
