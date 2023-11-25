import { SentMessageInfo } from 'nodemailer';
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "autoevaluacionesunicauca@gmail.com",
    pass: "pyzibcpuxesqpbba",
  },
});

export const sendEmailToProfessor = async (user: any) => {
  let content: string = `<h1>Se encuentra activa la autoevaluación</h1><br><p>Para realizarla ingrese al siguiente link:</p><br><a href='${URL}autoevaluaciones/login'>Realizar autoevaluación</a>`;

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

