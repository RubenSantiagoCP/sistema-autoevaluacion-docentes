"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usunot_1 = require("../controllers/usunot");
const router = (0, express_1.Router)();
// Se va a los metodos del controlador labor.ts, 
router.get('/', usunot_1.getUsuNotificaciones);
router.get('/:id', usunot_1.getUsuNotificacion);
router.delete('/:id', usunot_1.deleteUsuNotificacion);
router.post('/', usunot_1.createUsuNotificacion);
router.put('/:id', usunot_1.updateUsuNotificacion);
exports.default = router;
