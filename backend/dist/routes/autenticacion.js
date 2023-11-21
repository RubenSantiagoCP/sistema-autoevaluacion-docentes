"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autenticacion_1 = require("../controllers/autenticacion");
const router = (0, express_1.Router)();
router.post('/login', autenticacion_1.login);
exports.default = router;
