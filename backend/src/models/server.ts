import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routesUsuario from '../routes/usuario';
import routesEvaluacion from '../routes/evaluacion';
import routesLabores from '../routes/labor';
import routesAutenticacion from "../routes/autenticacion";
import routesRoles from "../routes/rol";
import routesTipoLabor from "../routes/tipoLabor";
import routesPeriodo from "../routes/periodo";
import routesNotificacion from "../routes/notificacion";
import routesUsuNot from "../routes/usunot";
import routesUserol from "../routes/userol";
import emailRoutes from '../routes/sendEmailRoutes';
import db from '../db/connection';

class Server{
    private app: Application;
    private port: string;

    constructor() {
        this.app = express(); // Se configura una app express
        this.port = process.env.PORT || '3001'; // Puerto de escucha del servidor por el archivo .env || '3001'
        this.listen(); //Inicia el servidor al crear el objeto servidor
        this.midlewares(); // Para parsear el json a objeto
        this.routes();
        this.dbConnect();
    }

    // Inicia el servidor
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    // Configura las rutas
    routes() {
        // Mensaje temporal de trabajo en fortmato json
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API Working'
            })
        })

        // Se va a la ruta usuarios en la carpeta routes/usuario.ts
        this.app.use('/api/usuarios', routesUsuario)
        this.app.use('/api/evaluaciones', routesEvaluacion)
        this.app.use('/api/labores', routesLabores)
        this.app.use('/api/autenticacion', routesAutenticacion)
        this.app.use('/api/roles', routesRoles)
        this.app.use('/api/tipolabores', routesTipoLabor)
        this.app.use('/api/periodos', routesPeriodo)
        this.app.use('/api/notificaciones', routesNotificacion)
        this.app.use('/api/usunot', routesUsuNot)
        this.app.use('/api/sendEmail', emailRoutes);
        this.app.use('/api/userol', routesUserol);
    }

    //
    midlewares() {
        // Pasear el body del json a objeto
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    // Conexion a la base de datos
    async dbConnect() {
        try {
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos');
        }
    }
}

export default Server;