"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailToAllProfessors = void 0;
const sendEmail_1 = require("../models/util/sendEmail"); // Reemplaza con la ruta correcta
const sendEmailToAllProfessors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const professors = req.body.users;
        for (let professor of professors) {
            yield (0, sendEmail_1.sendEmailToProfessor)(professor);
        }
        res.status(200).json({ message: 'Correos enviados con éxito' });
    }
    catch (error) {
        //console.log(error);
        res.status(500).json({ error: 'Error al enviar correos' });
    }
});
exports.sendEmailToAllProfessors = sendEmailToAllProfessors;
// Puedes agregar métodos similares para sendEmailToCordinator y sendEmailToRector
