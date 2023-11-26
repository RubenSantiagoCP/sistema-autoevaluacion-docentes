"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userol_1 = require("../controllers/userol");
const router = (0, express_1.Router)();
// Se va a los metodos del controlador tipolabor.ts, 
router.get('/', userol_1.getUseuseroles);
router.get('/:id', userol_1.getUseuserol);
router.delete('/:id', userol_1.deleteUseuserol);
router.post('/', userol_1.createUseuserol);
router.put('/:id', userol_1.updateUseuserol);
exports.default = router;
