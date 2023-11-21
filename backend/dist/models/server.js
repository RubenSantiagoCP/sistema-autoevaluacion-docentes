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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
const evaluacion_1 = __importDefault(require("../routes/evaluacion"));
const labor_1 = __importDefault(require("../routes/labor"));
const autenticacion_1 = __importDefault(require("../routes/autenticacion"));
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)(); // Se configura una app express
        this.port = process.env.PORT || '3001'; // Puerto de escucha del servidor por el archivo .env || '3001'
        this.listen(); //Inicia el servidor al crear el objeto servidor
        this.midlewares(); // Para parsear el json a objeto
        this.routes();
        this.dbConnect();
    }
    // Inicia el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        });
    }
    // Configura las rutas
    routes() {
        // Mensaje temporal de trabajo en fortmato json
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API Working'
            });
        });
        // Se va a la ruta usuarios en la carpeta routes/usuario.ts
        this.app.use('/api/usuarios', usuario_1.default);
        this.app.use('/api/evaluaciones', evaluacion_1.default);
        this.app.use('/api/labores', labor_1.default);
        this.app.use('/api/autenticacion', autenticacion_1.default);
    }
    //
    midlewares() {
        // Pasear el body del json a objeto
        this.app.use(express_1.default.json());
    }
    // Conexion a la base de datos
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Base de datos conectada');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectarse a la base de datos');
            }
        });
    }
}
exports.default = Server;
