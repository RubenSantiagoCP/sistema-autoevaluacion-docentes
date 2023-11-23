"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const labor_1 = require("../controllers/labor");
const router = (0, express_1.Router)();
// Se va a los metodos del controlador labor.ts, 
router.get('/', labor_1.getLabores);
router.get('/:id', labor_1.getLabor);
router.delete('/:id', labor_1.deleteLabor);
router.post('/', labor_1.createLabor);
router.put('/:id', labor_1.updateLabor);
exports.default = router;
