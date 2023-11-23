"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoLabor_1 = require("../controllers/tipoLabor");
const router = (0, express_1.Router)();
// Se va a los metodos del controlador tipolabor.ts, 
router.get('/', tipoLabor_1.getTipoLabores);
router.get('/:id', tipoLabor_1.getTipoLabor);
router.delete('/:id', tipoLabor_1.deleteTipoLabor);
router.post('/', tipoLabor_1.createTipoLabor);
router.put('/:id', tipoLabor_1.updateTipoLabor);
exports.default = router;
