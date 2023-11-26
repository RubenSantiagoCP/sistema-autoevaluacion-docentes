import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Usuario from "../models/usuario"; // Asegúrate de importar tu modelo de usuario aquí

export const login = async (req: Request, res: Response) => {
  try {
    // Obtener credenciales del cuerpo de la solicitud
    const { correo, contrasena } = req.body;

    // Buscar el usuario en la base de datos
    const usuario = await Usuario.findOne({ where: { USU_CORREO: correo } });

    // Verificar si el usuario existe y si la contraseña es correcta
    if (
      usuario &&
      usuario.USU_CLAVE &&
      bcrypt.compareSync(contrasena, usuario.USU_CLAVE)
    ) {
      // Generar un token JWT con información adicional del usuario
      const token = jwt.sign(
        {
          id: usuario.USU_ID,
          identificacion: usuario.USR_IDENTIFICACION,
          nombre: usuario.USU_NOMBRE,
          apellido: usuario.USU_APELLIDO,
          genero: usuario.USU_GENERO,
          estudio: usuario.USU_ESTUDIO,
          tipoId: usuario.USU_TIPOID,
          foto: usuario.USU_FOTO,
          correo: usuario.USU_CORREO,
          estado: usuario.USU_ESTADO,
          tipoUsu: usuario.USU_TIPOUSUARIO,
        },
        "tu_secreto_secreto",
        { expiresIn: "1h" }
      );

      // Enviar el token como respuesta
      res.json({ token });
    } else {
      // Si las credenciales son incorrectas, devolver un mensaje de error
      res.status(401).json({ message: "Credenciales incorrectas" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};
