"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluacion_1 = require("../controllers/evaluacion");
const router = (0, express_1.Router)();
// Se va a los metodos del controlador usuario.ts, 
router.get('/', evaluacion_1.getEvaluaciones);
router.get('/userol/:userol', evaluacion_1.getEvaluacionByUseRol);
router.get('/:periodo/:userol', evaluacion_1.getEvaluacionByPeriodoUser);
router.get('/:id', evaluacion_1.getEvaluacion);
router.delete('/:id', evaluacion_1.deleteEvaluacion);
router.post('/', evaluacion_1.createEvaluacion);
router.put('/:id', evaluacion_1.updateEvaluacion);
exports.default = router;
