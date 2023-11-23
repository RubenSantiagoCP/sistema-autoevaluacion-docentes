"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rol_1 = require("../controllers/rol");
const router = (0, express_1.Router)();
// Se va a los metodos del controlador rol.ts, 
router.get('/', rol_1.getRoles);
router.get('/:id', rol_1.getRol);
router.delete('/:id', rol_1.deleteRol);
router.post('/', rol_1.createRol);
router.put('/:id', rol_1.updateRol);
exports.default = router;
