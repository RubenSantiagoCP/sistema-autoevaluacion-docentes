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
exports.sendEmailToRector = exports.sendEmailToCordinator = exports.sendEmailToProfessor = void 0;
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "autoevaluacionesunicauca@gmail.com",
        pass: "pyzibcpuxesqpbba"
    }
});
const sendEmailToProfessor = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let content = `<h1>Se encuentra activa la autoevaluación</h1><br><p>Se han actualizado las auto evaluaciones</p>`;
    console.log("Correo enviado: " + user.USU_CORREO);
    let mailOptions = {
        from: "autoevaluacionesunicauca@gmail.com",
        to: user.USU_CORREO,
        subject: "Autoevaluación activa",
        html: content,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Correo enviado: " + info.response);
        }
    });
});
exports.sendEmailToProfessor = sendEmailToProfessor;
const sendEmailToCordinator = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let content = "<h1>Autoevaluación</h1><br><p>El usuario " +
        user.USU_NOMBRE +
        " " +
        user.USU_APELLIDO +
        " ha realizado su autoevaluación.</p>";
    let mailOptions = {
        from: "autoevaluacionesunicauca@gmail.com",
        to: user.USU_CORREO,
        subject: user.USU_NOMBRE +
            " " +
            user.USU_APELLIDO +
            " ha creado una autoevaluación",
        html: content,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Correo enviado: " + info.response);
        }
    });
});
exports.sendEmailToCordinator = sendEmailToCordinator;
/**
 * TODO: Enviar correo al decano
 * ! verificar que hay que enviar
 * @param user
 */
const sendEmailToRector = (user) => __awaiter(void 0, void 0, void 0, function* () {
    let content = "<h1>Autoevaluación</h1><br><p>El usuario " +
        user.USU_NOMBRE +
        " " +
        user.USU_APELLIDO +
        " ha creado una autoevaluación.</p>";
    let mailOptions = {
        from: "autoevaluacionesunicauca@gmail.com",
        to: user.USU_CORREO,
        subject: user.USU_NOMBRE +
            " " +
            user.USU_APELLIDO +
            " ha creado una autoevaluación",
        text: content,
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Correo enviado: " + info.response);
        }
    });
});
exports.sendEmailToRector = sendEmailToRector;
