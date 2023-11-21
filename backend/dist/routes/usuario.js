"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const router = (0, express_1.Router)();
// Se va a los metodos del controlador usuario.ts, 
router.get('/', usuario_1.getUsuarios);
router.get('/:id', usuario_1.getUsuario);
router.delete('/:id', usuario_1.deleteUsuario);
router.post('/', usuario_1.createUsuario);
router.put('/:id', usuario_1.updateUsuario);
exports.default = router;
