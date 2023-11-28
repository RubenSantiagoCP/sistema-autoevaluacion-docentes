import e from 'express';
import { SentMessageInfo } from 'nodemailer';
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: "autoevaluacionesunicauca@gmail.com",
      pass: "pyzibcpuxesqpbba"
    }
});

export const sendEmailToProfessor = async (user: any) => {
  let content: string = `<h1>Se encuentra activa la autoevaluación</h1><br><p>Se han actualizado las auto evaluaciones</p>`;
  console.log("Correo enviado: " + user.USU_CORREO);
  let mailOptions = {
    from: "autoevaluacionesunicauca@gmail.com",
    to: user.USU_CORREO,
    subject: "Autoevaluación activa",
    html: content,
  };

  transporter.sendMail(mailOptions, (error: Error | null, info: SentMessageInfo) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Correo enviado: " + info.response);
    }
  });
};

export const sendEmailToCordinator = async (user: any) => {
  let content: string =
    "<h1>Autoevaluación</h1><br><p>El usuario " +
    user.USU_NOMBRE +
    " " +
    user.USU_APELLIDO +
    " ha realizado su autoevaluación.</p>";

  let mailOptions = {
    from: "autoevaluacionesunicauca@gmail.com",
    to: user.USU_CORREO,
    subject:
      user.USU_NOMBRE +
      " " +
      user.USU_APELLIDO +
      " ha creado una autoevaluación",
    html: content,
  };

  transporter.sendMail(mailOptions, (error: Error | null, info: SentMessageInfo) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Correo enviado: " + info.response);
    }
  });
};

/**
 * TODO: Enviar correo al decano
 * ! verificar que hay que enviar
 * @param user 
 */
export const sendEmailToRector = async (user: any) => {
  let content: string =
    "<h1>Autoevaluación</h1><br><p>El usuario " +
    user.USU_NOMBRE +
    " " +
    user.USU_APELLIDO +
    " ha creado una autoevaluación.</p>";

  let mailOptions = {
    from: "autoevaluacionesunicauca@gmail.com",
    to: user.USU_CORREO,
    subject:
      user.USU_NOMBRE +
      " " +
      user.USU_APELLIDO +
      " ha creado una autoevaluación",
    text: content,
  };

  transporter.sendMail(mailOptions, (error: Error | null, info: SentMessageInfo) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Correo enviado: " + info.response);
    }
  });
};

