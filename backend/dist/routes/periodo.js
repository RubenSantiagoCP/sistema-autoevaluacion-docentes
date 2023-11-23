"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const periodo_1 = require("../controllers/periodo");
const router = (0, express_1.Router)();
// Se va a los metodos del controlador usuario.ts, 
router.get('/', periodo_1.getPeriodos);
router.get('/:id', periodo_1.getPeriodo);
router.delete('/:id', periodo_1.deletePeriodo);
router.post('/', periodo_1.createPeriodo);
router.put('/:id', periodo_1.updatePeriodo);
exports.default = router;
