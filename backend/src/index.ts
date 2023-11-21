import Server from "./models/server";
import dotenv from 'dotenv'

// Se configura las variables de entorno
dotenv.config();

// Crea una instancia del Servidor en la carpeta models server.ts
const server = new Server();