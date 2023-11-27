"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const router = (0, express_1.Router)();
// Se va a los metodos del controlador usuario.ts, 
router.get('/ident/:identificacion', usuario_1.getUsuarioByIdentificacion);
router.get('/estado/:id', usuario_1.updateUsuarioEstadoById);
router.get('/:id', usuario_1.getUsuario);
router.get('/', usuario_1.getUsuarios);
router.get('/type/:type', usuario_1.getUsuarioByType);
router.delete('/:id', usuario_1.deleteUsuario);
router.post('/', usuario_1.createUsuario);
router.put('/:id', usuario_1.updateUsuario);
router.get('/detallado/get', usuario_1.getUsuarioDetallado);
exports.default = router;
