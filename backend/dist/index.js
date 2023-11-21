"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./models/server"));
const dotenv_1 = __importDefault(require("dotenv"));
// Se configura las variables de entorno
dotenv_1.default.config();
// Crea una instancia del Servidor en la carpeta models server.ts
const server = new server_1.default();
