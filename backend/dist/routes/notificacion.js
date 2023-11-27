"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notificacion_1 = require("../controllers/notificacion");
const router = (0, express_1.Router)();
// Se va a los metodos del controlador labor.ts, 
router.get('/', notificacion_1.getNotificaciones);
router.get('/:id', notificacion_1.getNotificacion);
router.delete('/:id', notificacion_1.deleteNotificacion);
router.post('/', notificacion_1.createNotificacion);
//router.put('/:id', updateNotificacion);
router.get('/detallado/get', notificacion_1.getNotificacionDetallado);
exports.default = router;
